/** @format */

'use client';

import {
	KpiGrid,
	AnalyticsSection,
	KanbanSection,
	BottomMetricsGrid,
} from '@/features/dashboard';

export default function Dashboardpage() {
	return (
		<>
			<KpiGrid />
			<AnalyticsSection />
			<KanbanSection />
			<BottomMetricsGrid />
		</>
	);
}
