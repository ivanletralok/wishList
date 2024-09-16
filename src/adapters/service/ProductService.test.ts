import { describe, it, expect, vi } from 'vitest';
import { productMock } from '../../core/data/ProductMock';
import { Product } from '../../core/entities/Product';
import { fetchProducts } from './ProductService';

vi.mock('./CustomAxios', () => ({
	default: {
		get: vi.fn().mockResolvedValue({
			data: productMock,
		}),
	},
}));

describe('fetchProducts', () => {
	it('should return a list of products when the response is successful', async () => {
		const products: Product[] = await fetchProducts();
		expect(products).toHaveLength(3);
		expect(products[0].title).toBe('Product 1');
	});
});
