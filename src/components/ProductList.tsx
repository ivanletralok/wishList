import React from 'react';
import { Product } from '../core/entities/Product';
import ProductCard from '../components/ProductCard';
import CustomToast from './CustomToast';
import PaginationControls from './PaginationControl';
import useProductList from '../hooks/useProductList';
import { IonImg, IonLabel } from '@ionic/react';
import imgEmpty from '../assets/img/empty.svg';

interface ProductListProps {
	products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
	const {
		currentPage,
		toastVisible,
		toastMessage,
		handlePageChange,
		addProductToWishlistHandler,
		paginatedProducts,
		setToastVisible,
		itemsPerPage
	} = useProductList(products);

	return (
		<div className='flex flex-col h-full'>
			<div className='flex-1 overflow-auto'>
				{!products.length ? (
					<>
						{
							<div className='text-center flex flex-col items-center mt-4'>
								<IonLabel className='font-bold text-blue-500 text-base md:text-lg lg:text-xl'>
									<h1>No data to display</h1>
								</IonLabel>
								<IonImg
									src={imgEmpty}
									alt='No items in wishlist'
									className='w-full max-w-xs h-auto my-4 mt-24'
								/>
							</div>
						}{' '}
					</>
				) : (
					<>
						<div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 m-2'>
							{paginatedProducts.map((product) => (
								<ProductCard
									key={product.id}
									product={product}
									onAddToWishlist={() => addProductToWishlistHandler(product)}
								/>
							))}
						</div>
					</>
				)}
			</div>

			<PaginationControls
				currentPage={currentPage}
				totalPages={Math.ceil(products.length / itemsPerPage)}
				onPageChange={handlePageChange}
			/>

			<CustomToast
				isOpen={toastVisible}
				message={toastMessage}
				onDidDismiss={() => setToastVisible(false)}
			/>
		</div>
	);
};

export default ProductList;
