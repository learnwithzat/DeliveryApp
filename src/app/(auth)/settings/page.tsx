/** @format */

'use client';

import { Card, CardHeader } from '@/components/ui/Card';

export default function SettingsPage() {
	return (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: '280px 1fr',
				gap: 14,
			}}>
			<Card>
				<div style={{ padding: '8px 0' }}>
					{[
						'General',
						'Notifications',
						'Team',
						'Billing',
						'Integrations',
						'Security',
						'API Keys',
					].map((setting) => (
						<div
							key={setting}
							style={{
								padding: '10px 12px',
								marginBottom: 4,
								borderRadius: 'var(--r-md)',
								cursor: 'pointer',
								fontSize: 13,
								color: 'var(--text-secondary)',
								transition: 'all 0.15s',
							}}
							onMouseEnter={(e) => {
								(e.currentTarget as HTMLElement).style.background =
									'var(--bg-raised)';
								(e.currentTarget as HTMLElement).style.color =
									'var(--text-primary)';
							}}
							onMouseLeave={(e) => {
								(e.currentTarget as HTMLElement).style.background =
									'transparent';
								(e.currentTarget as HTMLElement).style.color =
									'var(--text-secondary)';
							}}>
							{setting}
						</div>
					))}
				</div>
			</Card>
			<Card>
				<CardHeader title='General Settings' />
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						minHeight: 400,
						color: 'var(--text-muted)',
					}}>
					Settings configuration will be displayed here
				</div>
			</Card>
		</div>
	);
}
