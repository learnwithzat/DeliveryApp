/** @format */

'use client';

import { useRouter, usePathname } from 'next/navigation';
import { NAV_ITEMS } from './nav.data';
import { NavItem } from './NavItem';

function LogoSection() {
	const router = useRouter();
	return (
		<div className='p-[20px_18px_16px] border-b border-[var(--border)] flex items-center gap-[11px]'>
			<div
				className='w-[34px] h-[34px] rounded-[var(--r-md)] shrink-0 bg-gradient-to-br from-[#1a56db] to-[#7c3aed] flex items-center justify-center shadow-[0_2px_8px_rgba(26,86,219,0.3)] cursor-pointer'
				onClick={() => router.push('/dashboard')}
				role='button'
				tabIndex={0}>
				<svg
					width='15'
					height='15'
					viewBox='0 0 24 24'
					fill='none'
					stroke='white'
					strokeWidth='2.2'
					strokeLinecap='round'>
					<path d='M12 2L2 7l10 5 10-5-10-5z' />
					<path d='M2 17l10 5 10-5' />
					<path d='M2 12l10 5 10-5' />
				</svg>
			</div>
			<div>
				<div className='text-[15px] font-extrabold tracking-tight leading-tight'>
					ZATdel
				</div>
				<div className='text-[10px] text-[var(--text-muted)] font-mono tracking-[0.07em] leading-[1.3]'>
					DELIVERY TOWER
				</div>
			</div>
		</div>
	);
}

function NavButton({
	item,
	isActive,
	onClick,
}: {
	item: NavItem;
	isActive: boolean;
	onClick: () => void;
}) {
	return (
		<button
			onClick={onClick}
			className={`w-full flex items-center gap-[9px] p-[8px_10px] rounded-[var(--r-md)] mb-px text-left cursor-pointer transition-all duration-150 relative text-[13px] ${
				isActive ?
					'border border-[rgba(26,86,219,0.18)] bg-[var(--brand-light)] text-[var(--brand)] font-semibold'
				:	'border border-transparent text-[var(--text-secondary)] font-medium hover:bg-[var(--bg-raised)] hover:text-[var(--text-primary)]'
			}`}>
			{isActive && (
				<div className='absolute -left-[10px] top-1/2 -translate-y-1/2 w-[3px] h-[18px] bg-[var(--brand)] rounded-[0_3px_3px_0]' />
			)}
			<span
				className={`shrink-0 flex ${isActive ? 'opacity-100' : 'opacity-[0.55]'}`}>
				{item.icon}
			</span>
			<span className='flex-1 tracking-tight'>{item.label}</span>
			{item.badge && (
				<span
					className={`text-[10px] font-mono p-[1px_7px] rounded-full font-medium ${
						isActive ?
							'bg-[rgba(26,86,219,0.12)] text-[var(--brand)]'
						:	'bg-[var(--bg-sunken)] text-[var(--text-muted)]'
					}`}>
					{item.badge}
				</span>
			)}
		</button>
	);
}

function ProfileCard() {
	const router = useRouter();
	return (
		<div className="p-[14px] border-t border-[var(--border)]">
			<div
				className="flex items-center gap-2.5 p-[9px_12px] rounded-[var(--r-md)] bg-[var(--bg-raised)] border border-[var(--border)] cursor-pointer hover:bg-[var(--bg-sunken)] transition-colors"
				onClick={() => router.push('/settings')}
				role='button'
				tabIndex={0}>
				<div className="w-[30px] h-[30px] rounded-lg bg-gradient-to-br from-[#1a56db] to-[#7c3aed] flex items-center justify-center text-[11px] font-bold text-white shrink-0 font-mono">OA</div>
				<div className="flex-1 min-w-0">
					<div className="text-xs font-semibold">Omar Al-Farsi</div>
					<div className="text-[10px] text-[var(--text-muted)] font-mono">Admin · Main Logistics</div>
				</div>
				<span style={{ color: 'var(--text-faint)', fontSize: 14 }}>⌄</span>
			</div>
		</div>
	);
}

export function Sidebar() {
	const router = useRouter();
	const pathname = usePathname();
	const sections = [...new Set(NAV_ITEMS.map((n) => n.section))];

	const handleNavigation = (item: NavItem) => {
		if (item.href) {
			router.push(item.href);
		}
	};

	const isActiveRoute = (item: NavItem) => pathname === item.href;

	return (
		<aside className="w-[228px] min-w-[228px] bg-[var(--bg-surface)] border-r border-[var(--border)] flex flex-col overflow-hidden h-full">
			<LogoSection />
			<nav className="flex-1 p-2.5 overflow-y-auto">
				{sections.map((section) => (
					<div key={section}>
						<div className="text-[9px] font-semibold tracking-[0.12em] uppercase text-[var(--text-faint)] p-[12px_10px_5px] font-mono">{section}</div>
						{NAV_ITEMS.filter((n) => n.section === section).map((item) => (
							<NavButton
								key={item.label}
								item={item}
								isActive={isActiveRoute(item)}
								onClick={() => handleNavigation(item)}
							/>
						))}
					</div>
				))}
			</nav>
			<ProfileCard />
		</aside>
	);
}
