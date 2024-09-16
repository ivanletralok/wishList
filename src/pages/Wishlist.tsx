import React from 'react';
import { IonImg, IonLabel } from '@ionic/react';
import { Product } from '../core/entities/Product';
import useProductWishList from '../hooks/useProductWishList';
import CustomAlert from '../components/CustomAlert';
import SortingSelector from '../components/SortingSelector';
import WishlistItem from '../components/wishListItem';
import img from '../assets/img/empty.svg';

const Wishlist: React.FC = () => {
	const { sortOrder, setSortOrder, sortedWishlist, handleRemove, confirmRemove } =
		useProductWishList();

	return (
		<div className='p-4 md:p-6 lg:p-8'>
			{!!sortedWishlist.length && (
				<SortingSelector sortOrder={sortOrder} onSortOrderChange={setSortOrder} />
			)}
			{!sortedWishlist.length ? (
				<div className='text-center flex flex-col items-center'>
					<IonLabel className='font-bold text-blue-500 text-base md:text-lg lg:text-xl'>
						<h1>No items in your wishlist</h1>
					</IonLabel>
					<IonImg
						src={img}
						alt='No items in wishlist'
						className='w-full max-w-xs h-auto my-4 mt-24'
					/>
				</div>
			) : (
				<div className='h-[calc(100vh-8rem)] overflow-y-auto flex flex-col'>
					{sortedWishlist.map((product: Product) => (
						<WishlistItem
							key={product.id}
							product={product}
							onRemove={() => handleRemove(product.id)}
						/>
					))}
				</div>
			)}
			<CustomAlert
				header='Are You Sure?'
				message='Are you sure you want to remove this item from your wishlist?'
				confirmeRemove={confirmRemove}
			/>
		</div>
	);
};

export default Wishlist;
