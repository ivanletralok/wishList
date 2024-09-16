import axios from 'axios';
import { useProductsStore } from '../../store/useProductsStore';

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
	(config) => {
		const setLoading = useProductsStore.getState().setLoading;
		setLoading(true);
		return config;
	},
	(error) => {
		const setLoading = useProductsStore.getState().setLoading;
		setLoading(false);
		return Promise.reject(error);
	}
);

axiosInstance.interceptors.response.use(
	(response) => {
		const setLoading = useProductsStore.getState().setLoading;
		setLoading(false);
		return response;
	},
	(error) => {
		const setLoading = useProductsStore.getState().setLoading;
		setLoading(false);
		return Promise.reject(error);
	}
);

export default axiosInstance;
