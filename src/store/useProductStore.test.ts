import { describe, it, expect, vi } from 'vitest';
import { act } from '@testing-library/react';
import { fetchProducts } from '../adapters/service/ProductService';
import { useProductsStore } from './useProductsStore';
import { productMock } from '../core/data/ProductMock';
import { saveDesiredProducts } from '../adapters/storage/localStorage';

// Mockear las funciones externas
vi.mock('../adapters/service/ProductService', () => ({
	fetchProducts: vi.fn(),
}));
vi.mock('../adapters/storage/localStorage', () => ({
	getDesiredProducts: vi.fn(() => []),
	saveDesiredProducts: vi.fn(),
}));

describe('useProductsStore', () => {
	it('should fetch and store products', async () => {
		const mockProducts = [productMock[0], productMock[1]];

		// Mockear el fetch de productos
		vi.mocked(fetchProducts).mockResolvedValue(mockProducts);

		// Llamar a la acción del store para obtener productos
		await act(async () => {
			await useProductsStore.getState().getProducts();
		});

		// Verificar que los productos se guardaron en el estado
		const products = useProductsStore.getState().products;
		expect(products).toEqual(mockProducts);
	});

	it('should add product to wishlist and save it in localStorage', async () => {
		const product = productMock[0];

		// Agregar producto a la lista de deseos
		await act(async () => {
			useProductsStore.getState().addProductToWishlist(product);
		});

		const wishlist = useProductsStore.getState().wishlist;
		expect(wishlist).toHaveLength(1);
		expect(wishlist[0]).toEqual(product);
		expect(saveDesiredProducts).toHaveBeenCalledWith(wishlist);
	});

	it('should remove product from wishlist', async () => {
		const product1 = productMock[0];
		const product2 = productMock[1];

		// Establecer lista de deseos inicial
		await act(async () => {
			useProductsStore.setState({ wishlist: [product1, product2] });
		});

		// Eliminar producto de la lista de deseos
		await act(async () => {
			useProductsStore.getState().removeProductFromWishlist(product1.id);
		});

		const wishlist = useProductsStore.getState().wishlist;
		expect(wishlist).toHaveLength(1);
		expect(wishlist[0]).toEqual(product2);
	});

	it('should check if a product is in wishlist', async () => {
		const product = productMock[0];

		// Agregar producto a la lista de deseos
		await act(async () => {
			useProductsStore.getState().addProductToWishlist(product);
		});

		const isInWishlist = useProductsStore.getState().isProductInWishlist(product.id);
		expect(isInWishlist).toBe(true);

		const isNotInWishlist = useProductsStore
			.getState()
			.isProductInWishlist(productMock[2].id);
		expect(isNotInWishlist).toBe(false);
	});

	it('should filter products by title', async () => {
		const mockProducts = [productMock[0], productMock[1]];

		// Establecer productos en el estado
		await act(async () => {
			useProductsStore.setState({ products: mockProducts });
		});

		await act(async () => {
			useProductsStore.getState().filterProducts('Product 2');
		});

		const filteredProducts = useProductsStore.getState().filterList;

		expect(filteredProducts).toHaveLength(1);
		expect(filteredProducts[0]).toEqual(productMock[1]);
	});
});
