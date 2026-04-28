/** @format */

'use client';

import { Card, CardHeader } from '@/components/ui/Card';

export default function CustomersPage() {
	return (
		<Card>
			<CardHeader title='Customer Management' />
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					minHeight: 400,
					color: 'var(--text-muted)',
				}}>
				Customer directory and management content will be displayed here
			</div>
		</Card>
	);
}
