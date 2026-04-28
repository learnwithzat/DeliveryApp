/** @format */

import { Color, ColorPalette } from '../types/dashboard.types';

export const COLOR_MAP: Record<Color, ColorPalette> = {
	blue: {
		bg: 'var(--brand-light)',
		text: 'var(--brand)',
		border: 'rgba(26,86,219,0.25)',
		bar: 'var(--brand)',
	},
	green: {
		bg: 'var(--success-bg)',
		text: 'var(--success)',
		border: 'var(--success-ring)',
		bar: 'var(--success)',
	},
	red: {
		bg: 'var(--danger-bg)',
		text: 'var(--danger)',
		border: 'var(--danger-ring)',
		bar: 'var(--danger)',
	},
	amber: {
		bg: 'var(--warning-bg)',
		text: 'var(--warning)',
		border: 'var(--warning-ring)',
		bar: 'var(--warning)',
	},
	violet: {
		bg: 'var(--violet-bg)',
		text: 'var(--violet)',
		border: 'var(--violet-ring)',
		bar: 'var(--violet)',
	},
	teal: {
		bg: 'var(--teal-bg)',
		text: 'var(--teal)',
		border: 'rgba(13,148,136,0.25)',
		bar: 'var(--teal)',
	},
};
