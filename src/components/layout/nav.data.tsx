/** @format */

import { Icon, ICONS } from '@/components/ui/Icon';
import { NavItem } from './NavItem';

export const NAV_ITEMS: NavItem[] = [
	{
		section: 'Core',
		label: 'Overview',
		icon: <Icon path={ICONS.overview} />,
		badge: 'Live',
		href: '/dashboard',
	},
	{
		section: 'Core',
		label: 'Orders',
		icon: <Icon path={ICONS.orders} />,
		badge: '1,248',
		href: '/orders',
	},
	{
		section: 'Core',
		label: 'Dispatch',
		icon: <Icon path={ICONS.dispatch} />,
		href: '/dispatch',
	},
	{
		section: 'Core',
		label: 'Live Tracking',
		icon: <Icon path={ICONS.tracking} />,
		badge: '23',
		href: '/live-tracking',
	},
	{
		section: 'Assets',
		label: 'Fleet',
		icon: <Icon path={ICONS.fleet} />,
		badge: '60',
		href: '/fleet',
	},
	// Add after Fleet or before Customers
	{
		section: 'Assets',
		label: 'Delivery Boys',
		icon: <Icon path={ICONS.fleet} />, // or create a new icon
		badge: '48',
		href: '/delivery-boy',
	},
	{
		section: 'Assets',
		label: 'Customers',
		icon: <Icon path={ICONS.customers} />,
		href: '/customers',
	},
	{
		section: 'Insights',
		label: 'Finance',
		icon: <Icon path={ICONS.finance} />,
		href: '/finance',
	},
	{
		section: 'Insights',
		label: 'Analytics',
		icon: <Icon path={ICONS.analytics} />,
		href: '/analytics',
	},
	{
		section: 'Insights',
		label: 'Reports',
		icon: <Icon path={ICONS.reports} />,
		href: '/reports',
	},
	{
		section: 'System',
		label: 'Settings',
		icon: <Icon path={ICONS.settings} />,
		href: '/settings',
	},
];
