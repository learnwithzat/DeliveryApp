/** @format */

import { BarChart } from '@/components/ui/BarChart';
import { Card, CardHeader } from '@/components/ui/Card';
import { Pill } from '@/components/ui/Pill';
import { layoutStyles } from '../styles';
import { LiveMap } from './LiveMap';

const WEEKLY_LABELS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const WEEKLY_DEL = [120, 145, 132, 168, 155, 178, 163];
const WEEKLY_FAIL = [8, 12, 6, 9, 11, 7, 5];
const HOURLY_VALS = [22, 35, 48, 62, 71, 85, 98, 87, 76, 64, 45, 28];
const HOURLY_LBLS = [
	'8',
	'9',
	'10',
	'11',
	'12',
	'13',
	'14',
	'15',
	'16',
	'17',
	'18',
	'19',
];

export function AnalyticsSection() {
	return (
		<div style={layoutStyles.analyticsGrid}>
			<Card>
				<CardHeader
					title='Delivery Performance'
					right={
						<select style={layoutStyles.select}>
							<option>Last 7 Days</option>
							<option>Today</option>
							<option>Last 30 Days</option>
						</select>
					}
				/>
				<BarChart
					values={WEEKLY_DEL}
					labels={WEEKLY_LABELS}
					color='var(--brand)'
					secondaryValues={WEEKLY_FAIL}
					secondaryColor='#fca5a5'
					height={155}
				/>
			</Card>

			<Card>
				<CardHeader
					title='Hourly Throughput'
					right={
						<Pill
							label='Peak: 2 PM'
							color='green'
						/>
					}
				/>
				<BarChart
					values={HOURLY_VALS}
					labels={HOURLY_LBLS}
					color='#4ade80'
					height={155}
				/>
			</Card>

			<Card style={{ padding: '18px 18px' }}>
				<CardHeader
					title='Live Map'
					right={
						<Pill
							label='23 Active'
							color='green'
						/>
					}
				/>
				<LiveMap />
			</Card>
		</div>
	);
}
