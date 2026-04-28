/** @format */

'use client';

import { useState } from 'react';
import { DRIVERS } from '@/features/dashboard/data/drivers.data';
import { Card, CardHeader } from '@/components/ui/Card';
import { Pill } from '@/components/ui/Pill';
import { Driver } from '@/features/dashboard/types/dashboard.types';

export default function DeliveryBoyPage() {
	const [selectedDriver, setSelectedDriver] = useState<Driver | null>(null);
	const [filterStatus, setFilterStatus] = useState('all');

	const stats = [
		{ label: 'Total Drivers', value: '48', icon: '👥', color: 'var(--brand)' },
		{ label: 'Active Now', value: '32', icon: '🟢', color: 'var(--success)' },
		{ label: 'On Delivery', value: '12', icon: '🚚', color: 'var(--violet)' },
		{ label: 'Off Duty', value: '4', icon: '⏸', color: 'var(--warning)' },
	];

	const statuses = ['all', 'active', 'on-delivery', 'off-duty'];

	return (
		<div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
			{/* Stats Grid */}
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(4, 1fr)',
					gap: 13,
				}}>
				{stats.map((stat) => (
					<div
						key={stat.label}
						style={{
							background: 'var(--bg-surface)',
							border: '1px solid var(--border)',
							borderRadius: 'var(--r-lg)',
							padding: '16px 18px',
							boxShadow: 'var(--shadow-sm)',
						}}>
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'space-between',
								marginBottom: 8,
							}}>
							<span
								style={{
									fontSize: 11,
									fontWeight: 600,
									textTransform: 'uppercase',
									color: 'var(--text-muted)',
									fontFamily: 'var(--font-mono)',
								}}>
								{stat.label}
							</span>
							<span style={{ fontSize: 20 }}>{stat.icon}</span>
						</div>
						<div
							style={{
								fontSize: 28,
								fontWeight: 800,
								color: stat.color,
							}}>
							{stat.value}
						</div>
					</div>
				))}
			</div>

			{/* Main Content */}
			<div
				style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: 14 }}>
				{/* Drivers List */}
				<Card>
					<CardHeader
						title='Delivery Personnel'
						right={
							<div style={{ display: 'flex', gap: 8 }}>
								<select
									value={filterStatus}
									onChange={(e) => setFilterStatus(e.target.value)}
									style={{
										background: 'var(--bg-raised)',
										border: '1px solid var(--border)',
										borderRadius: 'var(--r-sm)',
										padding: '4px 10px',
										fontSize: 11,
										fontFamily: 'var(--font-mono)',
										color: 'var(--text-secondary)',
									}}>
									{statuses.map((status) => (
										<option
											key={status}
											value={status}>
											{status.charAt(0).toUpperCase() + status.slice(1)}
										</option>
									))}
								</select>
								<button
									style={{
										padding: '4px 12px',
										borderRadius: 'var(--r-sm)',
										background: 'var(--brand)',
										color: '#fff',
										border: 'none',
										fontSize: 11,
										fontWeight: 600,
										cursor: 'pointer',
									}}>
									+ Add Driver
								</button>
							</div>
						}
					/>

					<div style={{ marginTop: 8 }}>
						{/* Table Header */}
						<div
							style={{
								display: 'grid',
								gridTemplateColumns: '40px 1fr 0.8fr 0.8fr 0.8fr 0.6fr',
								gap: 12,
								padding: '10px 12px',
								borderBottom: '1px solid var(--border)',
								fontSize: 11,
								fontWeight: 600,
								color: 'var(--text-muted)',
								fontFamily: 'var(--font-mono)',
								textTransform: 'uppercase',
							}}>
							<div></div>
							<div>Driver</div>
							<div>Status</div>
							<div>Trips</div>
							<div>Rating</div>
							<div>Actions</div>
						</div>

						{/* Driver Rows */}
						{DRIVERS.map((driver) => (
							<div
								key={driver.name}
								onClick={() => setSelectedDriver(driver)}
								style={{
									display: 'grid',
									gridTemplateColumns: '40px 1fr 0.8fr 0.8fr 0.8fr 0.6fr',
									gap: 12,
									padding: '12px',
									borderBottom: '1px solid var(--border)',
									cursor: 'pointer',
									transition: 'background 0.15s',
									background:
										selectedDriver?.name === driver.name ?
											'var(--brand-light)'
										:	'transparent',
								}}
								onMouseEnter={(e) => {
									if (selectedDriver?.name !== driver.name) {
										(e.currentTarget as HTMLElement).style.background =
											'var(--bg-raised)';
									}
								}}
								onMouseLeave={(e) => {
									if (selectedDriver?.name !== driver.name) {
										(e.currentTarget as HTMLElement).style.background =
											'transparent';
									}
								}}>
								<div
									style={{
										width: 32,
										height: 32,
										borderRadius: 8,
										background: driver.color,
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										fontSize: 11,
										fontWeight: 700,
										color: '#fff',
									}}>
									{driver.initials}
								</div>
								<div>
									<div style={{ fontSize: 13, fontWeight: 600 }}>
										{driver.name}
									</div>
									<div style={{ fontSize: 10, color: 'var(--text-muted)' }}>
										ID: DRV{Math.floor(Math.random() * 1000)}
									</div>
								</div>
								<div>
									<Pill
										label={
											driver.trips > 12 ? 'Active'
											: driver.trips > 8 ?
												'On Delivery'
											:	'Off Duty'
										}
										color={
											driver.trips > 12 ? 'green'
											: driver.trips > 8 ?
												'violet'
											:	'amber'
										}
									/>
								</div>
								<div style={{ fontSize: 13, fontWeight: 500 }}>
									{driver.trips} trips
								</div>
								<div>
									<span
										style={{
											fontSize: 13,
											fontWeight: 600,
											color:
												driver.rating === '98%' ?
													'var(--success)'
												:	'var(--text-primary)',
										}}>
										{driver.rating}
									</span>
								</div>
								<div>
									<button
										style={{
											padding: '4px 8px',
											borderRadius: 'var(--r-sm)',
											border: '1px solid var(--border)',
											background: 'var(--bg-surface)',
											fontSize: 10,
											cursor: 'pointer',
										}}>
										View
									</button>
								</div>
							</div>
						))}
					</div>
				</Card>

				{/* Driver Details Panel */}
				{selectedDriver ?
					<Card>
						<CardHeader
							title='Driver Details'
							right={
								<button
									onClick={() => setSelectedDriver(null)}
									style={{
										background: 'transparent',
										border: 'none',
										fontSize: 18,
										cursor: 'pointer',
										color: 'var(--text-muted)',
									}}>
									✕
								</button>
							}
						/>
						<div style={{ textAlign: 'center', marginBottom: 20 }}>
							<div
								style={{
									width: 80,
									height: 80,
									borderRadius: 40,
									background: selectedDriver.color,
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									fontSize: 28,
									fontWeight: 700,
									color: '#fff',
									margin: '0 auto 12px',
								}}>
								{selectedDriver.initials}
							</div>
							<h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>
								{selectedDriver.name}
							</h3>
							<Pill
								label={selectedDriver.trips > 12 ? 'Active' : 'On Delivery'}
								color='green'
							/>
						</div>

						<div
							style={{ borderTop: '1px solid var(--border)', paddingTop: 16 }}>
							<div style={{ marginBottom: 16 }}>
								<div
									style={{
										fontSize: 11,
										color: 'var(--text-muted)',
										marginBottom: 4,
									}}>
									Phone Number
								</div>
								<div style={{ fontSize: 14, fontWeight: 500 }}>
									+966 5{Math.floor(Math.random() * 10000000)}
								</div>
							</div>
							<div style={{ marginBottom: 16 }}>
								<div
									style={{
										fontSize: 11,
										color: 'var(--text-muted)',
										marginBottom: 4,
									}}>
									Vehicle
								</div>
								<div style={{ fontSize: 14, fontWeight: 500 }}>
									Delivery Bike · Plate:{' '}
									{Math.random().toString(36).substring(2, 8).toUpperCase()}
								</div>
							</div>
							<div style={{ marginBottom: 16 }}>
								<div
									style={{
										fontSize: 11,
										color: 'var(--text-muted)',
										marginBottom: 4,
									}}>
									Performance
								</div>
								<div style={{ fontSize: 14, fontWeight: 500 }}>
									{selectedDriver.trips} total trips · {selectedDriver.rating}{' '}
									on-time
								</div>
								<div
									style={{
										marginTop: 8,
										height: 4,
										background: 'var(--bg-sunken)',
										borderRadius: 2,
										overflow: 'hidden',
									}}>
									<div
										style={{
											width: selectedDriver.pct,
											height: '100%',
											background: 'var(--success)',
											borderRadius: 2,
										}}
									/>
								</div>
							</div>
						</div>

						<div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
							<button
								style={{
									flex: 1,
									padding: '8px',
									borderRadius: 'var(--r-md)',
									background: 'var(--brand)',
									color: '#fff',
									border: 'none',
									fontSize: 12,
									fontWeight: 600,
									cursor: 'pointer',
								}}>
								Assign Order
							</button>
							<button
								style={{
									flex: 1,
									padding: '8px',
									borderRadius: 'var(--r-md)',
									background: 'var(--bg-surface)',
									border: '1px solid var(--border)',
									fontSize: 12,
									cursor: 'pointer',
								}}>
								View History
							</button>
						</div>
					</Card>
				:	<Card>
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								minHeight: 400,
								color: 'var(--text-muted)',
								textAlign: 'center',
							}}>
							<div>
								<div style={{ fontSize: 48, marginBottom: 12 }}>👈</div>
								<div style={{ fontSize: 14 }}>
									Select a driver to view details
								</div>
							</div>
						</div>
					</Card>
				}
			</div>
		</div>
	);
}
