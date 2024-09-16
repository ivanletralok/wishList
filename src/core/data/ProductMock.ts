import { Product } from '../entities/Product';

export const productMock: Product[] = [
	{
		id: 1,
		title: 'Product 1',
		price: 100,
		description: 'Description 1',
		images: ['image1.png'],
		creationAt: '2024-01-01T00:00:00Z',
		updatedAt: '2024-01-01T00:00:00Z',
		category: {
			id: 1,
			name: 'Category 1',
			image: 'category1.png',
			creationAt: '2024-01-01T00:00:00Z',
			updatedAt: '2024-01-01T00:00:00Z',
		},
	},

	{
		id: 2,
		title: 'Product 2',
		price: 200,
		description: 'Description 2',
		images: ['image2.png'],
		creationAt: '2024-01-01T00:00:00Z',
		updatedAt: '2024-01-01T00:00:00Z',
		category: {
			id: 2,
			name: 'Category 2',
			image: 'category2.png',
			creationAt: '2024-01-01T00:00:00Z',
			updatedAt: '2024-01-01T00:00:00Z',
		},
	},
	{
		id: 3,
		title: 'Product 3',
		price: 300,
		description: 'Description 3',
		images: ['image3.png'],
		creationAt: '2024-01-01T00:00:00Z',
		updatedAt: '2024-01-01T00:00:00Z',
		category: {
			id: 3,
			name: 'Category 3',
			image: 'category3.png',
			creationAt: '2024-01-01T00:00:00Z',
			updatedAt: '2024-01-01T00:00:00Z',
		},
	},
];
