/** @format */

import { OrderCard, Color } from '../types/dashboard.types';

export const KANBAN_COLUMNS: {
	title: string;
	color: Color;
	count: number;
	orders: OrderCard[];
}[] = [
	{
		title: 'Pending',
		color: 'amber',
		count: 4,
		orders: [
			{
				id: '#1002',
				name: 'QuickMart',
				sub: 'Waiting · 8 min',
				tag: 'Urgent',
				color: 'amber',
			},
			{
				id: '#1003',
				name: 'City Pharmacy',
				sub: 'Waiting · 3 min',
				tag: 'Awaiting',
				color: 'amber',
			},
		],
	},
	{
		title: 'Assigned',
		color: 'blue',
		count: 6,
		orders: [
			{
				id: '#1011',
				name: 'Fresh Grocer',
				sub: 'Ahmed · 0.8 km',
				tag: 'Assigned',
				color: 'blue',
			},
			{
				id: '#1014',
				name: 'The Restaurant',
				sub: 'Yasir · 1.2 km',
				tag: 'Assigned',
				color: 'blue',
			},
		],
	},
	{
		title: 'On Route',
		color: 'violet',
		count: 12,
		orders: [
			{
				id: '#1020',
				name: 'Fuel Order',
				sub: 'Salem · ETA 4 min',
				tag: 'En Route',
				color: 'violet',
			},
			{
				id: '#1022',
				name: 'Spare Parts',
				sub: 'Rafiq · ETA 9 min',
				tag: 'En Route',
				color: 'violet',
			},
		],
	},
	{
		title: 'Delivered',
		color: 'green',
		count: 932,
		orders: [
			{
				id: '#1031',
				name: 'Shop Hub',
				sub: 'Done · 14:32',
				tag: 'Delivered',
				color: 'green',
			},
			{
				id: '#1035',
				name: 'Flower Boutique',
				sub: 'Done · 14:28',
				tag: 'Delivered',
				color: 'green',
			},
		],
	},
];
