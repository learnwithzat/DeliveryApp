/** @format */

import { KPI_DATA } from '../data/kpi.data';
import { KpiCard } from './KpiCard';
import { layoutStyles } from '../styles';

export function KpiGrid() {
	return (
		<div style={layoutStyles.kpiGrid}>
			{KPI_DATA.map((k, i) => (
				<KpiCard
					key={k.label}
					k={k}
					index={i}
				/>
			))}
		</div>
	);
}
