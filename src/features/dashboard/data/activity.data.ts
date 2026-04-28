/** @format */

import { Activity } from '../types/dashboard.types';

export const ACTIVITY: Activity[] = [
	{
		icon: '🚴',
		bg: 'var(--violet-bg)',
		color: 'var(--violet)',
		text: 'Order #1022 assigned to Rafiq',
		time: 'now',
	},
	{
		icon: '✓',
		bg: 'var(--success-bg)',
		color: 'var(--success)',
		text: 'Ahmed delivered parcel #1019',
		time: '2m ago',
	},
	{
		icon: '$',
		bg: 'var(--warning-bg)',
		color: 'var(--warning)',
		text: 'COD collected — SAR 128.00',
		time: '4m ago',
	},
	{
		icon: '⚡',
		bg: 'var(--brand-light)',
		color: 'var(--brand)',
		text: 'Route optimized for 12 active orders',
		time: '6m ago',
	},
];
