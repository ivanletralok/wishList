import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { Product } from '../core/entities/Product';
import {
	getDesiredProducts,
	saveDesiredProducts,
} from '../adapters/storage/localStorage';
import { fetchProducts } from '../adapters/service/ProductService';

interface ProductsState {
	products: Product[];
	wishlist: Product[];
	filterList: Product[];
	loading: boolean;
	addProductToWishlist: (product: Product) => void;
	removeProductFromWishlist: (id: number) => void;
	isProductInWishlist: (productId: number) => boolean;
	getProducts: () => Promise<void>;
	filterProducts: (filter: string) => void;
	setLoading: (loading: boolean) => void;
}

export const useProductsStore = create<ProductsState>()(
	devtools(
		(set, get) => ({
			products: [],
			wishlist: getDesiredProducts(),
			filterList: [],
			loading: false,

			getProducts: async () => {
				const products = await fetchProducts();
				set({ products });
			},

			addProductToWishlist: (product) => {
				set((state) => {
					const updatedWishlist = [...state.wishlist, product];
					saveDesiredProducts(updatedWishlist);
					return { wishlist: updatedWishlist };
				});
			},
			removeProductFromWishlist: (id) => {
				set((state) => {
					const updatedWishlist = state.wishlist.filter(
						(product) => product.id !== id
					);
					saveDesiredProducts(updatedWishlist);
					return { wishlist: updatedWishlist };
				});
			},

			isProductInWishlist: (productId) => {
				const { wishlist } = get();
				return wishlist.some((product) => product.id === productId);
			},

			filterProducts: (filter: string): void => {
				const { products } = get();
				const filteredProducts = products.filter((product) => {
					return product.title.toLowerCase().includes(filter.toLowerCase());
				});
				set({ filterList: filteredProducts });
			},

			setLoading: (loading: boolean) => set({ loading: loading }),
		}),

		{ name: 'ProductsStore' }
	)
);
