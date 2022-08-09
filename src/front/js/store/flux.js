import { ScrollElement } from "react-scroll";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			api: 'http://127.0.0.1:5000/',
			parametros: { "numero": 1, "numero2": 2, "numero3": 3, "numero4": 4 },
			email: '',
			password: '',
			name: '',
			phonenumber: '',
			lastname: '',
			facebook: '',
			instagram: '',
			twitter: '',
			linkedin: '',
			rol: '',
			currentUser: null,
			show: false	
		},
		actions: {
			// Use getActions to call a function within a fuction
			handleSubmit: async (e, history) => {
				e.preventDefault();

				const { api, email, password } = getStore();
				const response = await fetch(`${api}/api/users`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						'email': email,
						'password': password
					})
				});

				const { status, message, data} = await response.json();

				if(status === 'failed'){
					window.alert(message)
				}
				if(status === 'success'){
					window.alert(message)
					one.scrollIntoView()
					setStore({
						email: '',
						password: ''
					})
				}
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
                setStore({
                    name: currentUser?.user?.profile?.name,
                    lastname: currentUser?.user?.profile?.lastname,
                    email: currentUser?.user?.email,
					phonenumber: currentUser?.user?.profile?.phonenumber,
					facebook: currentUser?.user?.profile?.facebook,
					instagram: currentUser?.user?.profile?.instagram,
					twitter: currentUser?.user?.profile?.twitter,
					linkedin: currentUser?.user?.profile?.linkedin
                })
            },
			updateInfo: async (e, history) => {
				e.preventDefault();

				const { api, email, name, lastname, password, phonenumber, facebook, instagram, twitter, linkedin, currentUser } = getStore();

				const response = await fetch(`${api}api/update`, {
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json',
						'Authorization': `Bearer ${currentUser?.access_token}`
					},
					body: JSON.stringify({
						'email': email,
						'name': name,
						'lastname': lastname,
						'password': password,
						'phonenumber': phonenumber,
						'facebook': facebook,
						'instagram': instagram,
						'twitter': twitter,
						'linkedin': linkedin
					})
				});

				const { status, message, data } = await response.json();
				
				if(status === 'failed'){
					window.alert(message);
				}
				
				if(status === 'success'){
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
			handleLogout: () => {
				sessionStorage.removeItem('currentUser')
				setStore({currentUser: null, email: ''})
			}
		}
	}
};

export default getState;
