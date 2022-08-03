const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			api: 'https://5000-alejandrogo-loginexerci-q1q83uzg0az.ws-us54.gitpod.io',
			email: '',
			password: '',
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
			}
		}
	}
};

export default getState;
