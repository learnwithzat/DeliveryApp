/** @format */

import { Sidebar } from '@/components/layout/Sidebar';
import { Topbar } from '@/components/layout/Topbar';
import { layoutStyles } from '@/features/dashboard/styles';

/**
 * Authenticated Layout
 * Provides the main ERP shell (Sidebar + Topbar) for all dashboard pages.
 */
export default function AuthLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<div style={layoutStyles.container}>
			<Sidebar />
			<div style={layoutStyles.main}>
				<Topbar />
				<main style={layoutStyles.content}>
					{children}
				</main>
			</div>
		</div>
	);
}
