/** @format */

export type Color = 'blue' | 'green' | 'red' | 'amber' | 'violet' | 'teal';

export interface OrderCard {
	id: string;
	name: string;
	sub: string;
	tag: string;
	color: Color;
}

export interface Driver {
	initials: string;
	name: string;
	trips: number;
	rating: string;
	pct: number;
	color: string;
}

export interface Activity {
	icon: string;
	bg: string;
	color: string;
	text: string;
	time: string;
}

export interface KpiData {
	label: string;
	value: string;
	delta: string;
	up: boolean;
	icon: string;
	color: Color;
}

export interface ColorPalette {
	bg: string;
	text: string;
	border: string;
	bar: string;
}
