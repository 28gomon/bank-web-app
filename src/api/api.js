import * as axios from 'axios';

const instance = axios.create({
	baseURL: 'https://solutions-bank-web-app.firebaseio.com/bankData/'
});

export const cardAPI = {

	getCard: async () => {
		return await instance.get('card.json');
	},
};

export const userAPI = {

	authUser: async () => {
		return await instance.get('clients.json');
	},

	authorized: async (authorized) => {
		return instance.post('clients.json', {authorized: authorized});
	},
};