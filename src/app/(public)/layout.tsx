/** @format */

import { Suspense } from 'react';

export default function PublicLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<div
			style={{
				minHeight: '100vh',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				background:
					'linear-gradient(135deg, var(--bg-page) 0%, var(--bg-surface) 100%)',
				padding: '20px',
			}}>
			<div
				style={{
					width: '100%',
					maxWidth: 480,
					margin: '0 auto',
				}}>
				<Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
			</div>
		</div>
	);
}
