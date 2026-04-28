/** @format */

'use client';

import { Card, CardHeader } from '@/components/ui/Card';

export default function ReportsPage() {
	return (
		<Card>
			<CardHeader title='Reports Center' />
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(3, 1fr)',
					gap: 16,
					padding: '20px 0',
				}}>
				{[
					'Daily Report',
					'Weekly Summary',
					'Monthly Analysis',
					'Driver Performance',
					'Customer Analytics',
					'Financial Summary',
				].map((report) => (
					<div
						key={report}
						style={{
							padding: 16,
							border: '1px solid var(--border)',
							borderRadius: 'var(--r-md)',
							cursor: 'pointer',
							transition: 'all 0.2s',
						}}
						onMouseEnter={(e) => {
							(e.currentTarget as HTMLElement).style.borderColor =
								'var(--brand)';
							(e.currentTarget as HTMLElement).style.background =
								'var(--brand-light)';
						}}
						onMouseLeave={(e) => {
							(e.currentTarget as HTMLElement).style.borderColor =
								'var(--border)';
							(e.currentTarget as HTMLElement).style.background = 'transparent';
						}}>
						<div
							style={{
								fontSize: 14,
								fontWeight: 600,
								color: 'var(--text-primary)',
								marginBottom: 4,
							}}>
							{report}
						</div>
						<div
							style={{
								fontSize: 11,
								color: 'var(--text-muted)',
							}}>
							Last generated: Today
						</div>
					</div>
				))}
			</div>
		</Card>
	);
}
