import { useState, useMemo } from 'react';
import { Product } from '../core/entities/Product';
import { useProductsStore } from '../store/useProductsStore';

const useProductList = (products: Product[]) => {
	const itemsPerPage = 14;
	const [currentPage, setCurrentPage] = useState(1);
	const [toastVisible, setToastVisible] = useState(false);
	const [toastMessage, setToastMessage] = useState('');

	const { addProductToWishlist, isProductInWishlist, removeProductFromWishlist } =
		useProductsStore();

	const addProductToWishlistHandler = (product: Product) => {
		if (!isProductInWishlist(product.id)) {
			addProductToWishlist(product);
			setToastMessage(`${product.title} added to the wishlist`);
		} else {
			removeProductFromWishlist(product.id);
			setToastMessage('Removed from the wishlist');
		}
		setToastVisible(true);
	};

	const totalPages = Math.ceil(products.length / itemsPerPage);

	const handlePageChange = (pageNumber: number) => {
		if (pageNumber >= 1 && pageNumber <= totalPages) {
			setCurrentPage(pageNumber);
		}
	};

	const paginatedProducts = useMemo(
		() => products.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage),
		[products, currentPage]
	);

	return {
		currentPage,
		toastVisible,
		toastMessage,
		handlePageChange,
		addProductToWishlistHandler,
		paginatedProducts,
		setToastVisible,
		itemsPerPage
	};
};

export default useProductList;
