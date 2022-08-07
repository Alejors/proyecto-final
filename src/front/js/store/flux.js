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
			linkedin: ''			
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
			updateInfo: (e, history) => {
				e.preventDefault();
				console.log("Estoy funcionando");
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
