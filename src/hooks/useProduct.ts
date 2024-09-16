import { useEffect, useRef } from 'react';
import { useProductsStore } from '../store/useProductsStore';

const useProduct = () => {
	const { getProducts, products, filterProducts, filterList } = useProductsStore();

	const isLoaded = useRef(false);

	useEffect(() => {
		if (!isLoaded.current) {
			getProducts();
			isLoaded.current = true;
		}
	}, [getProducts]);

	return {
		products: filterList.length ? filterList : products,
		filterProducts,
		filterList,
	};
};

export default useProduct;
