/** @format */

'use client';

import { Card, CardHeader } from '@/components/ui/Card';

export default function FinancePage() {
	return (
		<>
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(3, 1fr)',
					gap: 14,
					marginBottom: 14,
				}}>
				{[
					{
						label: 'Total Revenue',
						value: 'SAR 124,832',
						change: '+12.5%',
						up: true,
					},
					{
						label: 'Pending COD',
						value: 'SAR 8,420',
						change: '-3.2%',
						up: false,
					},
					{
						label: 'Avg Order Value',
						value: 'SAR 98.50',
						change: '+5.8%',
						up: true,
					},
				].map((metric) => (
					<Card key={metric.label}>
						<div
							style={{
								fontSize: 11,
								fontWeight: 600,
								textTransform: 'uppercase',
								color: 'var(--text-muted)',
								marginBottom: 8,
							}}>
							{metric.label}
						</div>
						<div
							style={{
								fontSize: 24,
								fontWeight: 700,
								color: 'var(--text-primary)',
								marginBottom: 4,
							}}>
							{metric.value}
						</div>
						<div
							style={{
								fontSize: 12,
								color: metric.up ? 'var(--success)' : 'var(--danger)',
							}}>
							{metric.up ? '▲' : '▼'} {metric.change}
						</div>
					</Card>
				))}
			</div>
			<Card>
				<CardHeader title='Financial Overview' />
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						minHeight: 300,
						color: 'var(--text-muted)',
					}}>
					Financial charts and reports will be displayed here
				</div>
			</Card>
		</>
	);
}
