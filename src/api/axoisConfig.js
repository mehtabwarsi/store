import axios from 'axios';

const api = axios.create({
	baseURL: 'https://dummyjson.com',
	timeout: 10000,
	headers: {
		'Content-Type': 'application/json',
	},
});

const getProduct = async () => {
	try {
		const response = await api.get('products?limit=25')
		return response.data

	} catch (error) {
		if (axios.isAxiosError(error)) {
			console.error('Axios error:', error.message);
		} else {
			console.error('Unexpected error:', error);
		}
		throw error;

	}

}

export {
	api,
	getProduct
}