/** @format */

import { CSSProperties, ReactNode } from 'react';

export function Card({
	children,
	className,
	style,
}: {
	children: ReactNode;
	className?: string;
	style?: CSSProperties;
}) {
	return (
		<div
			className={`bg-[var(--bg-surface)] border border-[var(--border)] rounded-[var(--r-lg)] p-[18px_20px] shadow-[var(--shadow-sm)] ${className || ''}`}
			style={style}>
			{children}
		</div>
	);
}

export function CardHeader({
	title,
	right,
}: {
	title: string;
	right?: ReactNode;
}) {
	return (
		<div className='flex items-center justify-between mb-4'>
			<h3 className='text-sm font-bold text-[var(--text-primary)] tracking-tight'>
				{title}
			</h3>
			{right}
		</div>
	);
}
