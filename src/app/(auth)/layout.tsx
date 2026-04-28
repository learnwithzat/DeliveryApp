/** @format */

import { Sidebar } from '@/components/layout/Sidebar';
import { Topbar } from '@/components/layout/Topbar';

/**
 * Authenticated Layout
 * Provides the main ERP shell (Sidebar + Topbar) for all dashboard pages.
 */
export default function AuthLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<div className='flex h-full w-full overflow-hidden'>
			<Sidebar />
			<div className='flex-1 flex flex-col overflow-hidden bg-background'>
				<Topbar />
				<main className='flex-1 overflow-y-auto p-[22px_26px] flex flex-col gap-[18px]'>
					{children}
				</main>
			</div>
		</div>
	);
}
