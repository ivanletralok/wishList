import { useState, useMemo, useEffect } from 'react';
import { useProductsStore } from '../store/useProductsStore';
import { useAlertStore } from '../store/useAlertStore';
import { Product } from '../core/entities/Product';

const useProductWishList = () => {
	const { wishlist, removeProductFromWishlist } = useProductsStore();
	const { showAlert, setShowAlert, setSelectedProductId, selectedProductId } =
		useAlertStore();

	const [sortOrder, setSortOrder] = useState<string>('name');

	const handleRemove = (productId: number) => {
		setSelectedProductId(productId);
		setShowAlert(true);
	};

	const confirmRemove = () => {
		if (selectedProductId !== null) {
			removeProductFromWishlist(selectedProductId);
			setSelectedProductId(null);
		}
		setShowAlert(false);
	};

	const sortFunctions: { [key: string]: (a: Product, b: Product) => number } = {
		name: (a, b) => a.title.localeCompare(b.title),
		price: (a, b) => a.price - b.price,
		creationAt: (a, b) =>
			new Date(b.creationAt).getTime() - new Date(a.creationAt).getTime(),
	};

	const sortedWishlist = useMemo(() => {
		return [...wishlist].sort((a, b) => {
			const sortFunction = sortFunctions[sortOrder];
			return sortFunction ? sortFunction(a, b) : 0;
		});
	}, [wishlist, sortOrder]);

	return {
		wishlist,
		handleRemove,
		confirmRemove,
		sortedWishlist,
		sortOrder,
		setSortOrder,
		showAlert,
		setShowAlert,
	};
};

export default useProductWishList;
