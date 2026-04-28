/** @format */

'use client';

import { LiveMap } from '@/features/dashboard';
import { Card, CardHeader } from '@/components/ui/Card';
import { Pill } from '@/components/ui/Pill';

export default function LiveTrackingPage() {
	return (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: '1fr 320px',
				gap: 14,
			}}>
			<Card>
				<CardHeader
					title='Live Tracking Map'
					right={
						<Pill
							label='23 Active'
							color='green'
						/>
					}
				/>
				<LiveMap />
			</Card>
			<Card>
				<CardHeader title='Active Deliveries' />
				<div>
					{[
						{ id: '#1022', driver: 'Rafiq', eta: '4 min', status: 'En Route' },
						{ id: '#1020', driver: 'Salem', eta: '9 min', status: 'En Route' },
						{ id: '#1019', driver: 'Ahmed', eta: '2 min', status: 'Nearby' },
						{ id: '#1035', driver: 'Yasir', eta: '12 min', status: 'En Route' },
					].map((delivery) => (
						<div
							key={delivery.id}
							style={{
								padding: '12px 0',
								borderBottom: '1px solid var(--border)',
							}}>
							<div
								style={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'space-between',
									marginBottom: 4,
								}}>
								<span
									style={{
										fontSize: 13,
										fontWeight: 600,
										color: 'var(--text-primary)',
									}}>
									{delivery.id}
								</span>
								<span
									style={{
										fontSize: 11,
										color: 'var(--success)',
										fontFamily: 'var(--font-mono)',
									}}>
									ETA {delivery.eta}
								</span>
							</div>
							<div
								style={{
									fontSize: 12,
									color: 'var(--text-secondary)',
								}}>
								Driver: {delivery.driver}
							</div>
						</div>
					))}
				</div>
			</Card>
		</div>
	);
}
