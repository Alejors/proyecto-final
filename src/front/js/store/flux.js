import Notiflix, { Notify } from "notiflix";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			api: 'http://localhost:5000/',
			topicQuestions: [
				{
					'topicname': 'petcare',
					'title': '¿Tienes o quieres tener mascotas?',
					'img': 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80'
				},
				{
					'topicname': 'outdoor',
					'title': '¿Te gustan las actividades al aire libre?',
					'img': 'https://images.unsplash.com/photo-1470246973918-29a93221c455?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'
				},
				{
					'topicname': 'gaming',
					'title': '¿Te gustan los videojuegos?',
					'img': 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
				},
				{
					'topicname': 'spirituality',
					'title': '¿Te interesa cultivar tu mundo interior?',
					'img': 'https://images.unsplash.com/photo-1602192509154-0b900ee1f851?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
				},
				{
					'topicname': 'health',
					'title': '¿Necesitas ideas para cuidar tu salud?',
					'img': 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
				},
				{
					'topicname': 'fashion',
					'title': '¿Te preocupa tu imagen personal?',
					'img': 'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
				},
				{
					'topicname': 'socialskills',
					'title': '¿Sientes que te cuesta relacionarte con otros?',
					'img': 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
				},
				{
					'topicname': 'sustainability',
					'title': '¿Te preocupas por el medio ambiente?',
					'img': 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1013&q=80'
				},
				{
					'topicname': 'hobbies',
					'title': '¿Te gustaría conocer pasatiempos interesantes?',
					'img': 'https://images.unsplash.com/photo-1522410818928-5522dacd5066?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
				},
				{
					'topicname': 'homecare',
					'title': '¿Quieres ideas de cómo mantener tu casa ordenada?',
					'img': 'https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
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
					Notify.failure(message)
				}
				if (status === 'success') {
					Notify.success(message)
					setStore({
						email: '',
						password: '',
						name: ''
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

					Notify.failure(message);
				}

				if (status === 'success') {

					Notify.success(message)
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
				let rol = ""
				if (currentUser?.user?.rol?.cliente == true) { rol = "Estudiante"; }
				else if (currentUser?.user?.rol?.profesor == true) { rol = "Profesor"; }
				else { rol = "Admin"; }
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
					rol: rol,

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
					Notify.failure(message);
				}

				if (status === 'success') {
					Notify.info(message)
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
			handleLogout: (history) => {
				sessionStorage.removeItem('currentUser')
				setStore({
					currentUser: null,
					email: '',
					name: ''
				})
				Notify.warning('Logged out!')
				history('/');
			},
			updatePreferences: async (e, history) => {
				e.preventDefault();
				const { preferences, api, currentUser } = getStore();

				let filteredPreferences = [];
				for (const element in preferences) {
					if (preferences[`${element}`] == 'true') {
						filteredPreferences.push(element);
					}
				}
				if (filteredPreferences.length == 0) {
					Notify.warning('Must pick at least one preference')
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

				if (status === 'failed') {
					Notify.failure(message);
				}
				if (status === 'success') {
					Notify.info(message)
					currentUser.user.profile.services = filteredPreferences;
					sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
					history('/private')
				}
			},
			switchCategory: async (history) => {
				const { currentUser, rol, api } = getStore();
				const { loadProfile } = getActions();

				if (rol == 'Estudiante') {
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

					const { status, message, data } = await response.json();

					if (status == 'failed') {
						Notify.failure(message)
					}
					if (status == 'success') {
						Notify.info(message)
						currentUser.user.rol = data
						sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
						loadProfile();
						history('/profile');
					}

				} else if (rol == 'Profesor') {
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

					const { status, message, data } = await response.json();

					if (status == 'failed') {
						Notify.failure(message)
					}
					if (status == 'success') {
						Notify.info(message)
						currentUser.user.rol = data
						sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
						loadProfile();
						history('/profile');
					}
				}

			},
			sendEmail: async (e, history) => {
				e.preventDefault();

				const { api, email } = getStore();
				const response = await fetch(`${api}api/reset`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						'email': email
					})
				});

				const { status, data } = await response.json();

				if (status == 'success'){
					Email.send({
						SecureToken : "b72215c9-47d6-4a21-b24a-2a0a5f0dc017",
						To : `${email}`,
						From : "alejoatria@gmail.com",
						Subject : "Password reset",
						Body : data
					}).then(
					message => Notify.success(message)
					).then(
						Notify.warning('Remember to check Spam')
					).then(
						history('/login')
					)
					
				}
				if (status == 'failed'){
					Notify.failure(message)
				}
			}
		}
	}
};

export default getState;