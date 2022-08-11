const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			api: 'http://localhost:5000/',
			topicQuestions: [
				{
					'topicname': 'petcare',
					'title': '¿Tienes o quieres tener mascotas?'
				},
				{
					'topicname': 'outdoor',
					'title': '¿Te gustan las actividades al aire libre?'
				},
				{
					'topicname': 'gaming',
					'title': '¿Te gustan los videojuegos?'
				},
				{
					'topicname': 'spirituality',
					'title': '¿Te interesa cultivar tu mundo interior?'
				},
				{
					'topicname': 'health',
					'title': '¿Necesitas ideas para cuidar tu salud?'
				},
				{
					'topicname': 'fashion',
					'title': '¿Te preocupa tu imagen personal?'
				},
				{
					'topicname': 'socialskills',
					'title': '¿Sientes que te cuesta relacionarte con otros?'
				},
				{
					'topicname': 'sustainability',
					'title': '¿Te preocupas por el medio ambiente?'
				},
				{
					'topicname': 'hobbies',
					'title': '¿Te gustaría conocer pasatiempos interesantes?'
				},
				{
					'topicname': 'homecare',
					'title': '¿Quieres ideas de cómo mantener tu casa ordenada?'
				}
			],
			email: '',
			password: '',
			name: '',
			phonenumber: '',
			lastname: '',
			facebook: '',
			instagram: '',
			twitter: '',
			linkedin: '',
			picture: null,
			rol: '',
			currentUser: null,
			services: null,
			preferences: {
				'petcare': null,
				'outdoor': null,
				'gaming': null,
				'spirituality': null,
				'health': null,
				'fashion': null,
				'socialskills': null,
				'sustainability': null,
				'hobbies': null,
				'homecare': null
			},
		},
		actions: {
			handleSubmit: async (e, history) => {
				e.preventDefault();

				const { api, email, password, name } = getStore();
				const response = await fetch(`${api}/api/users`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						'email': email,
						'password': password,
						'name': name
					})
				});

				const { status, message, data } = await response.json();

				if (status === 'failed') {
					window.alert(message)
				}
				if (status === 'success') {
					window.alert(message)
					setStore({
						email: '',
						password: '',
						name:''
					})
					history('/login');
				}
			},
			handlePreferences: (e) => {
				const { name, value } = e.target;
				const { preferences } = getStore();
				let aux = preferences;
				aux[name] = value;
				setStore({
					preferences: aux
				});
			},
			receiveData: async (api) => {
				const response = await fetch(`${api}/api/users`, {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(response)

				});
				data = setStore({ email: email, password: password })
				console.log(data)
			},
			handleLogin: async (e, history) => {

				e.preventDefault();

				const { api, email, password } = getStore();

				const response = await fetch(`${api}/api/login`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						'email': email,
						'password': password
					})
				});

				const { status, data, message } = await response.json();

				if (status === 'failed') {

					window.alert(message);
				}

				if (status === 'success') {

					window.alert(message)
					sessionStorage.setItem('currentUser', JSON.stringify(data));

					setStore({
						currentUser: data,
						password: ''
					})

					history('/private');
				}
			},
			loadProfile: () => {
				const { currentUser } = getStore();

				let rol =""
				if (currentUser?.user?.rol?.cliente == true){rol = "Student";}
				else if (currentUser?.user?.rol?.profesor == true){rol = "Profesor";}
				else{rol = "Admin";}

				setStore({
					name: currentUser?.user?.profile?.name,
					lastname: currentUser?.user?.profile?.lastname,
					email: currentUser?.user?.email,
					phonenumber: currentUser?.user?.profile?.phonenumber,
					facebook: currentUser?.user?.profile?.facebook,
					instagram: currentUser?.user?.profile?.instagram,
					twitter: currentUser?.user?.profile?.twitter,
					linkedin: currentUser?.user?.profile?.linkedin,
					picture: currentUser?.user?.profile?.picture,
					rol: rol
				})
			},
			checkAuthentication: () => {
				if (sessionStorage.getItem('currentUser')) {
					setStore({
						currentUser: JSON.parse(sessionStorage.getItem('currentUser'))
					})
				}
			},
			updateInfo: async (e, history) => {
				e.preventDefault();

				const { api, email, name, lastname, password, phonenumber, facebook, instagram, twitter, linkedin, picture, currentUser } = getStore();

				let formData = new FormData();

				formData.append('email', email);
				formData.append('name', name);
				formData.append('lastname', lastname);
				formData.append('password', password);
				formData.append('phonenumber', phonenumber);
				formData.append('facebook', facebook);
				formData.append('instagram', instagram);
				formData.append('twitter', twitter);
				formData.append('linkedin', linkedin);
				formData.append('picture', picture);

				const response = await fetch(`${api}api/update`, {
					method: 'PUT',
					headers: {
						'Authorization': `Bearer ${currentUser?.access_token}`,
					},
					body: formData
				});

				const { status, message, data } = await response.json();

				if (status === 'failed') {
					window.alert(message);
				}

				if (status === 'success') {
					window.alert(message)
					currentUser.user = data,

						sessionStorage.setItem('currentUser', JSON.stringify(currentUser));

					setStore({
						currentUser,
						password: ''
					});

					history('/private');
				}
			},
			handleChange: e => {
				const { name, value } = e.target;
				setStore({
					[name]: value
				});
			},
			getServicios: async url => {
				try {
					const response = await fetch(url, {
						method: 'GET',
						headers: {
							'Content-Type': 'application/json',
						},
					});
					const data = await response.json();
					setStore({ services: data });
				} catch (error) {
					console.log(error);
				}
			},
			handlePicture: e => {
				const { files } = e.target;
				setStore({
					'picture': files[0]
				});
			},
			handleLogout: () => {
				sessionStorage.removeItem('currentUser')
				setStore({ 
					currentUser: null, 
					email: '',
					name: ''
				})
			},
			updatePreferences: async (e, history) => {
				e.preventDefault();
				const { preferences, api, currentUser } = getStore();
				
				let filteredPreferences = [];
				for (const element in preferences){
					if(preferences[`${element}`] == 'true'){
						filteredPreferences.push(element);
					}
				}
				if(filteredPreferences.length == 0) {
					window.alert('Must pick at least one preference')
					return null
				}
				const response = await fetch(`${api}api/preferences`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						'Authorization': `Bearer ${currentUser?.access_token}`
					},
					body: JSON.stringify({
						'services': filteredPreferences
					})
				});

				const { status, message } = await response.json();

				if(status === 'failed'){
					window.alert(message);
				}
				if(status === 'success'){
					window.alert(message)
					currentUser.user.profile.services = filteredPreferences;

					history('/private')
				}
			},
			switchCategory: async () => {
				const { currentUser, rol, api } = getStore();
				const { loadProfile } = getActions();
				
				if(rol == 'Student'){
					const response = await fetch(`${api}api/category`, {
						method: 'PUT',
						headers: {
							'Content-Type': 'application/json',
							'Authorization': `Bearer ${currentUser?.access_token}`
						},
						body: JSON.stringify({
							'profesor': true,
							'cliente': false
						})
					});

					const {status, message, data } = await response.json();

					if (status == 'failed'){
						window.alert(message)
					}
					if (status == 'success'){
						window.alert(message)
						currentUser.user.rol = data
						loadProfile();
					}

				}else if(rol == 'Profesor'){
					const response = await fetch(`${api}api/category`, {
						method: 'PUT',
						headers: {
							'Content-Type': 'application/json',
							'Authorization': `Bearer ${currentUser?.access_token}`
						},
						body: JSON.stringify({
							'profesor': false,
							'cliente': true
						})
					});

					const {status, message, data } = await response.json();

					if (status == 'failed'){
						window.alert(message)
					}
					if (status == 'success'){
						window.alert(message)
						currentUser.user.rol = data
						loadProfile();
					}
				}

			}
		}
	}
};

export default getState;