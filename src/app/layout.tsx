/** @format */

import type { Metadata } from 'next';
import { DM_Sans, DM_Mono } from 'next/font/google';
import './globals.css';

const dmSans = DM_Sans({
	variable: '--font-dm-sans',
	subsets: ['latin'],
	axes: ['opsz'],
	display: 'swap',
});

const dmMono = DM_Mono({
	variable: '--font-dm-mono',
	subsets: ['latin'],
	weight: ['400', '500'],
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'ZATdel — Delivery Control Tower',
	description:
		'Realtime dispatch, fleet management & delivery operations platform',
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html
			lang='en'
			className={`${dmSans.variable} ${dmMono.variable} h-full antialiased`}>
			<body className='min-h-screen flex flex-col bg-background text-foreground font-sans'>
				{children}
			</body>
		</html>
	);
}
