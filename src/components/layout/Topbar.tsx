/** @format */

import { layoutStyles } from '../../features/dashboard/styles';

export function Topbar() {
	return (
		<header style={layoutStyles.topbar}>
			<div style={{ flex: 1 }}>
				<div style={layoutStyles.topbarTitle}>
					<span style={layoutStyles.liveDot} />
					Operations Command Center
				</div>
				<div style={layoutStyles.topbarSub}>
					REALTIME DISPATCH MONITORING · APR 28 2026
				</div>
			</div>

			<div style={layoutStyles.searchContainer}>
				<svg
					width='13'
					height='13'
					viewBox='0 0 20 20'
					fill='none'
					stroke='currentColor'
					strokeWidth='2'>
					<circle
						cx='9'
						cy='9'
						r='7'
					/>
					<path d='M15 15l3 3' />
				</svg>
				<span style={{ flex: 1 }}>Search orders...</span>
				<span style={layoutStyles.kbd}>⌘K</span>
			</div>

			<button style={layoutStyles.buttonSecondary}>Export</button>
			<button style={layoutStyles.buttonPrimary}>+ New Dispatch</button>
		</header>
	);
}
