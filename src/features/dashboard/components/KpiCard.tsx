/** @format */

import { KpiData } from '../types/dashboard.types';
import { COLOR_MAP } from '../utils/colorMap';
import { kpiStyles } from '../styles';

export function KpiCard({ k, index }: { k: KpiData; index: number }) {
	const c = COLOR_MAP[k.color];
	return (
		<div
			style={{
				...kpiStyles.card,
				animation: `fadeUp 0.4s ${index * 0.07}s ease both`,
			}}
			onMouseEnter={(e) => {
				(e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-md)';
				(e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
			}}
			onMouseLeave={(e) => {
				(e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-sm)';
				(e.currentTarget as HTMLElement).style.transform = 'none';
			}}>
			<div style={{ ...kpiStyles.accent, background: c.text }} />
			<div style={{ ...kpiStyles.icon, background: c.bg }}>{k.icon}</div>
			<div style={kpiStyles.label}>{k.label}</div>
			<div style={kpiStyles.value}>{k.value}</div>
			<div
				style={{
					...kpiStyles.delta,
					color: k.up ? 'var(--success)' : 'var(--danger)',
				}}>
				{k.up ? '▲' : '▼'} {k.delta}
			</div>
		</div>
	);
}
