import { Product } from '../../core/entities/Product';

export const saveDesiredProducts = (products: Product[]) => {
   try {
     localStorage.setItem('wishlist', JSON.stringify(products));
   } catch (error) {
     console.error('Error save:', error);
   }
};

export const getDesiredProducts = (): Product[] => {
   try {
     const products = localStorage.getItem('wishlist');
     return products ? JSON.parse(products) : [];
   } catch (error) {
     console.error('Error get products:', error);
     return [];
   }
};
