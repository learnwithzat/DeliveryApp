/** @format */

'use client';

import { sidebarStyles } from '@/features/dashboard';
import { useRouter, usePathname } from 'next/navigation';
import { NAV_ITEMS } from './nav.data';
import { NavItem } from './NavItem';

function LogoSection() {
	const router = useRouter();
	return (
		<div style={sidebarStyles.logoContainer}>
			<div
				style={sidebarStyles.logoIcon}
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
				<div style={sidebarStyles.logoText}>ZATdel</div>
				<div style={sidebarStyles.logoSubtext}>DELIVERY TOWER</div>
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
			style={{
				...sidebarStyles.navButton,
				border:
					isActive ? '1px solid rgba(26,86,219,0.18)' : '1px solid transparent',
				background: isActive ? 'var(--brand-light)' : 'transparent',
				color: isActive ? 'var(--brand)' : 'var(--text-secondary)',
				fontWeight: isActive ? 600 : 500,
			}}
			onMouseEnter={(e) => {
				if (!isActive) {
					(e.currentTarget as HTMLElement).style.background =
						'var(--bg-raised)';
					(e.currentTarget as HTMLElement).style.color = 'var(--text-primary)';
				}
			}}
			onMouseLeave={(e) => {
				if (!isActive) {
					(e.currentTarget as HTMLElement).style.background = 'transparent';
					(e.currentTarget as HTMLElement).style.color =
						'var(--text-secondary)';
				}
			}}>
			{isActive && <div style={sidebarStyles.activeIndicator} />}
			<span
				style={{
					opacity: isActive ? 1 : 0.55,
					flexShrink: 0,
					display: 'flex',
				}}>
				{item.icon}
			</span>
			<span style={{ flex: 1, letterSpacing: '-0.005em' }}>{item.label}</span>
			{item.badge && (
				<span
					style={{
						...sidebarStyles.badge,
						background: isActive ? 'rgba(26,86,219,0.12)' : 'var(--bg-sunken)',
						color: isActive ? 'var(--brand)' : 'var(--text-muted)',
					}}>
					{item.badge}
				</span>
			)}
		</button>
	);
}

function ProfileCard() {
	const router = useRouter();
	return (
		<div style={{ padding: 14, borderTop: '1px solid var(--border)' }}>
			<div
				style={sidebarStyles.profileContainer}
				onClick={() => router.push('/settings')}
				role='button'
				tabIndex={0}>
				<div style={sidebarStyles.profileAvatar}>OA</div>
				<div style={{ flex: 1, minWidth: 0 }}>
					<div style={{ fontSize: 12, fontWeight: 600 }}>Omar Al-Farsi</div>
					<div style={sidebarStyles.profileSubtext}>Admin · Main Logistics</div>
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
		<aside style={sidebarStyles.aside}>
			<LogoSection />
			<nav style={sidebarStyles.nav}>
				{sections.map((section) => (
					<div key={section}>
						<div style={sidebarStyles.sectionHeader}>{section}</div>
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
