/** @format */

'use client';

import { Card, CardHeader } from '@/components/ui/Card';

export default function AnalyticsPage() {
	return (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: 'repeat(2, 1fr)',
				gap: 14,
			}}>
			<Card>
				<CardHeader title='Performance Metrics' />
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						minHeight: 300,
						color: 'var(--text-muted)',
					}}>
					Analytics dashboard will be displayed here
				</div>
			</Card>
			<Card>
				<CardHeader title='Key Insights' />
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						minHeight: 300,
						color: 'var(--text-muted)',
					}}>
					Data visualization and reports will be displayed here
				</div>
			</Card>
		</div>
	);
}
