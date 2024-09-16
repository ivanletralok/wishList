import React from 'react';
import {
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonCardTitle,
	IonIcon,
	IonImg,
	IonLabel,
} from '@ionic/react';
import { Product } from '../core/entities/Product';
import ExpandableText from './ExpandableText';
import { heartOutline, heart } from 'ionicons/icons';
import { useProductsStore } from '../store/useProductsStore';

interface ProductCardProps {
	product: Product;
	onAddToWishlist: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToWishlist }) => {
	const isProductInWishlist = useProductsStore((state) => state.isProductInWishlist);

	return (
		<IonCard className='shadow-lg rounded-lg overflow-hidden w-full max-w-xs mx-auto max-h-max'>
			<IonImg
				src={product.images[0] as string}
				alt={product.title}
				className='w-full h-32 object-cover'
			/>
			<IonCardHeader>
				<IonCardTitle className='text-sm md:text-sm font-bold'>
					<ExpandableText text={product.title} maxLength={20} show={false} />
				</IonCardTitle>
			</IonCardHeader>
			<IonCardContent>
				<IonLabel className='text-gray-600 font-bold text-sm'>
					${product.price.toFixed(2)}
				</IonLabel>
				<IonLabel className='text-xs md:text-xs'>
					<ExpandableText text={product.description} maxLength={20} show={false} />
				</IonLabel>
			</IonCardContent>
			<div className='flex justify-end p-2'>
				<IonIcon
					icon={isProductInWishlist(product.id) ? heart : heartOutline}
					className='text-red-500 text-xl cursor-pointer'
					onClick={onAddToWishlist}
					aria-label={`Toggle wishlist for ${product.title}`}
				/>
			</div>
		</IonCard>
	);
};

export default ProductCard;
