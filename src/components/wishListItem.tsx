import React from 'react';
import { IonCardContent, IonImg, IonLabel, IonButton, IonIcon } from '@ionic/react';
import { Product } from '../core/entities/Product';
import { trashOutline } from 'ionicons/icons';
import ExpandableText from './ExpandableText';

interface WishlistItemProps {
  product: Product;
  onRemove: () => void;
}

const WishlistItem: React.FC<WishlistItemProps> = ({ product, onRemove }) => (
  <div className='flex items-center p-1 border border-gray-200 rounded-lg shadow-sm mb-2 '>
    <IonImg
      src={product.images[0] as string}
      alt={product.title}
      className='w-16 h-16 object-cover rounded-md'
    />
    <div className='flex-1 m-1'>
      <div className='font-semibold text-sm flex justify-between'>
        <p className='ml-4 pt-2'>{product.title}</p>
        <IonButton
          fill='clear'
          color='danger'
          onClick={onRemove}
          className='p-0 m-0 text-sm cursor-pointer'
        >
          <IonIcon className='cursor-pointer text-right' icon={trashOutline} />
        </IonButton>
      </div>
      <IonCardContent>
        <IonLabel className='block text-gray-600 text-xs font-bold'>
          ${product.price.toFixed(2)}
        </IonLabel>
        <IonLabel>
          <ExpandableText text={product.description} maxLength={30} show={true} />
        </IonLabel>
      </IonCardContent>
    </div>
  </div>
);

export default WishlistItem;
