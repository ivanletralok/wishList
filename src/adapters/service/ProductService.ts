import { toast } from 'react-toastify';
import { Product } from '../../core/entities/Product';
import axiosInstance from './CustomAxios';

const API_URL = 'https://api.escuelajs.co/api/v1/products';

export const fetchProducts = async (): Promise<Product[]> => {
	try {
		const response = await axiosInstance.get(API_URL);
		const data: Product[] = response.data;
		return data;
	} catch (error) {
		toast.error((error as Error).message);
		return [];
	}
};
