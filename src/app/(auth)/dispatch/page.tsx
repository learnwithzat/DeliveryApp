/** @format */

'use client';

export default function DispatchPage() {
	return (
		<div
			style={{
				background: 'var(--bg-surface)',
				border: '1px solid var(--border)',
				borderRadius: 'var(--r-lg)',
				padding: '24px',
			}}>
			<h1
				style={{
					fontSize: 20,
					fontWeight: 700,
					color: 'var(--text-primary)',
					marginBottom: 8,
				}}>
				Dispatch Center
			</h1>
			<p
				style={{
					fontSize: 14,
					color: 'var(--text-secondary)',
					marginBottom: 24,
				}}>
				Assign and track deliveries in real-time
			</p>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					minHeight: 300,
					color: 'var(--text-muted)',
				}}>
				Dispatch content will be displayed here
			</div>
		</div>
	);
}
