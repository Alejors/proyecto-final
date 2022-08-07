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
			currentUser: null			
		},
		actions: {
			// Use getActions to call a function within a fuction
			receiveData: async (api) => {
				const response = await fetch(`${api}/api/listausers`, {
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

                    history.push('/private');
                }
            },
			updateInfo: async (e, history) => {
				e.preventDefault();

				const { api, email, name, lastname, password, phonenumber, facebook, instagram, twitter, linkedin } = getStore();

				const response = await fetch(`${api}/api/update`, {
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json',
						'Authorization': `Bearer ${currentUser?.access_token}`
					}
				})
				history('/private');
				return null;
			},
			handleChange: e => {
				const { name, value } = e.target;
				setStore({
					[name]: value
				});
			},
		}
	}
};

export default getState;
