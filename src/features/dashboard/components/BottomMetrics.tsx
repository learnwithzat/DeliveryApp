/** @format */

import { DRIVERS } from '../data/drivers.data';
import { ACTIVITY } from '../data/activity.data';
import { layoutStyles, metricStyles } from '../styles';
import { Card, CardHeader } from '@/components/ui/Card';
import { Pill } from '@/components/ui/Pill';

function FleetStatusCard() {
	const stats = [
		{
			label: 'Available',
			value: '44',
			color: 'var(--success)',
			icon: '🚲',
			bg: 'var(--success-bg)',
		},
		{
			label: 'On Route',
			value: '12',
			color: 'var(--violet)',
			icon: '🛣',
			bg: 'var(--violet-bg)',
		},
		{
			label: 'Maintenance',
			value: '4',
			color: 'var(--warning)',
			icon: '🔧',
			bg: 'var(--warning-bg)',
		},
		{
			label: 'Alerts',
			value: '3',
			color: 'var(--danger)',
			icon: '⚠',
			bg: 'var(--danger-bg)',
		},
	];
	return (
		<Card>
			<CardHeader
				title='Fleet Status'
				right={
					<Pill
						label='3 alerts'
						color='amber'
					/>
				}
			/>
			{stats.map((row) => (
				<div
					key={row.label}
					style={metricStyles.row}>
					<span style={metricStyles.rowLabel}>
						<span style={{ ...metricStyles.iconWrapper, background: row.bg }}>
							{row.icon}
						</span>
						{row.label}
					</span>
					<span style={{ ...metricStyles.rowValue, color: row.color }}>
						{row.value}
					</span>
				</div>
			))}
		</Card>
	);
}

function TopDriversCard() {
	return (
		<Card>
			<CardHeader
				title='Top Drivers'
				right={
					<Pill
						label='Today'
						color='green'
					/>
				}
			/>
			{DRIVERS.map((d) => (
				<div
					key={d.name}
					style={metricStyles.row}>
					<div style={{ ...metricStyles.avatar, background: d.color }}>
						{d.initials}
					</div>
					<div style={{ flex: 1, minWidth: 0 }}>
						<div style={{ fontSize: 12, fontWeight: 600 }}>{d.name}</div>
						<div style={metricStyles.rowSubtext}>
							{d.trips} trips · {d.rating}
						</div>
					</div>
					<div style={metricStyles.progressBg}>
						<div style={{ ...metricStyles.progressFill, width: `${d.pct}%` }} />
					</div>
				</div>
			))}
		</Card>
	);
}

function ActivityFeedCard() {
	return (
		<Card>
			<CardHeader
				title='Activity Feed'
				right={
					<Pill
						label='Live'
						color='blue'
					/>
				}
			/>
			{ACTIVITY.map((a, i) => (
				<div
					key={i}
					style={{
						...metricStyles.row,
						borderBottom:
							i < ACTIVITY.length - 1 ? '1px solid var(--border)' : 'none',
					}}>
					<div
						style={{
							...metricStyles.iconWrapper,
							background: a.bg,
							color: a.color,
						}}>
						{a.icon}
					</div>
					<div style={{ flex: 1 }}>
						<div style={metricStyles.activityText}>{a.text}</div>
						<div style={metricStyles.rowSubtext}>{a.time}</div>
					</div>
				</div>
			))}
		</Card>
	);
}

export function BottomMetricsGrid() {
	return (
		<div style={layoutStyles.bottomGrid}>
			<FleetStatusCard />
			<TopDriversCard />
			<ActivityFeedCard />
		</div>
	);
}
