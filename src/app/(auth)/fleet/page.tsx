/** @format */

'use client';

import { Card, CardHeader } from '@/components/ui/Card';
import { Pill } from '@/components/ui/Pill';
import { useState } from 'react';
import { Color } from '@/features/dashboard/types/dashboard.types';

interface Vehicle {
	id: string;
	type: string;
	plate: string;
	driver: string | null;
	status: 'active' | 'on-route' | 'available' | 'maintenance';
	fuel?: string;
	battery?: string;
	mileage: string;
	lastMaintenance: string;
	nextMaintenance: string;
	color: string;
	icon: string;
}

const VEHICLES: Vehicle[] = [
	{
		id: 'VHC-001',
		type: 'Delivery Bike',
		plate: 'JED-1234',
		driver: 'Ahmed',
		status: 'active',
		fuel: '85%',
		mileage: '12,450 km',
		lastMaintenance: '2026-04-15',
		nextMaintenance: '2026-05-15',
		color: 'linear-gradient(135deg,#1a56db,#7c3aed)',
		icon: '🏍️',
	},
	{
		id: 'VHC-002',
		type: 'Electric Scooter',
		plate: 'JED-5678',
		driver: 'Rafiq',
		status: 'active',
		battery: '92%',
		mileage: '8,230 km',
		lastMaintenance: '2026-04-20',
		nextMaintenance: '2026-05-20',
		color: 'linear-gradient(135deg,#16a34a,#0d9488)',
		icon: '🛵',
	},
	{
		id: 'VHC-003',
		type: 'Delivery Van',
		plate: 'JED-9012',
		driver: 'Yasir',
		status: 'on-route',
		fuel: '45%',
		mileage: '45,670 km',
		lastMaintenance: '2026-04-10',
		nextMaintenance: '2026-05-10',
		color: 'linear-gradient(135deg,#7c3aed,#a21caf)',
		icon: '🚐',
	},
	{
		id: 'VHC-004',
		type: 'Cargo Bike',
		plate: 'JED-3456',
		driver: 'Salem',
		status: 'maintenance',
		fuel: '0%',
		mileage: '18,230 km',
		lastMaintenance: '2026-04-25',
		nextMaintenance: '2026-05-25',
		color: 'linear-gradient(135deg,#d97706,#dc2626)',
		icon: '🚲',
	},
	{
		id: 'VHC-005',
		type: 'Electric Van',
		plate: 'JED-7890',
		driver: 'Khalid',
		status: 'available',
		battery: '100%',
		mileage: '3,450 km',
		lastMaintenance: '2026-04-18',
		nextMaintenance: '2026-05-18',
		color: 'linear-gradient(135deg,#0891b2,#06b6d4)',
		icon: '🚚',
	},
	{
		id: 'VHC-006',
		type: 'Motorbike',
		plate: 'JED-2345',
		driver: 'Omar',
		status: 'active',
		fuel: '67%',
		mileage: '22,890 km',
		lastMaintenance: '2026-04-12',
		nextMaintenance: '2026-05-12',
		color: 'linear-gradient(135deg,#9333ea,#a855f7)',
		icon: '🏍️',
	},
];

export default function FleetPage() {
	const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
	const [filterStatus, setFilterStatus] = useState('all');

	const stats = [
		{
			label: 'Total Vehicles',
			value: VEHICLES.length,
			icon: '🚗',
			color: 'var(--brand)',
		},
		{
			label: 'Active',
			value: VEHICLES.filter((v) => v.status === 'active').length,
			icon: '✅',
			color: 'var(--success)',
		},
		{
			label: 'On Route',
			value: VEHICLES.filter((v) => v.status === 'on-route').length,
			icon: '🛣️',
			color: 'var(--violet)',
		},
		{
			label: 'Maintenance',
			value: VEHICLES.filter((v) => v.status === 'maintenance').length,
			icon: '🔧',
			color: 'var(--warning)',
		},
		{
			label: 'Available',
			value: VEHICLES.filter((v) => v.status === 'available').length,
			icon: '🟢',
			color: 'var(--teal)',
		},
	];

	const statuses = ['all', 'active', 'on-route', 'available', 'maintenance'];

	const getStatusColor = (status: string): Color => {
		switch (status) {
			case 'active':
				return 'green';
			case 'on-route':
				return 'violet';
			case 'available':
				return 'teal';
			case 'maintenance':
				return 'amber';
			default:
				return 'blue';
		}
	};

	const getStatusLabel = (status: string): string => {
		switch (status) {
			case 'active':
				return 'Active';
			case 'on-route':
				return 'On Route';
			case 'available':
				return 'Available';
			case 'maintenance':
				return 'Maintenance';
			default:
				return status;
		}
	};

	const filteredVehicles =
		filterStatus === 'all' ? VEHICLES : (
			VEHICLES.filter((v) => v.status === filterStatus)
		);

	return (
		<div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
			{/* Stats Grid */}
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(5, 1fr)',
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
				{/* Vehicles List */}
				<Card>
					<CardHeader
						title='Fleet Management'
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
									+ Add Vehicle
								</button>
							</div>
						}
					/>

					<div style={{ marginTop: 8 }}>
						{/* Table Header */}
						<div
							style={{
								display: 'grid',
								gridTemplateColumns: '50px 1fr 0.8fr 0.8fr 0.8fr 0.8fr 0.6fr',
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
							<div>Vehicle</div>
							<div>Type</div>
							<div>Driver</div>
							<div>Status</div>
							<div>Fuel/Battery</div>
							<div>Actions</div>
						</div>

						{/* Vehicle Rows */}
						{filteredVehicles.map((vehicle) => (
							<div
								key={vehicle.id}
								onClick={() => setSelectedVehicle(vehicle)}
								style={{
									display: 'grid',
									gridTemplateColumns: '50px 1fr 0.8fr 0.8fr 0.8fr 0.8fr 0.6fr',
									gap: 12,
									padding: '12px',
									borderBottom: '1px solid var(--border)',
									cursor: 'pointer',
									transition: 'background 0.15s',
									background:
										selectedVehicle?.id === vehicle.id ?
											'var(--brand-light)'
										:	'transparent',
								}}
								onMouseEnter={(e) => {
									if (selectedVehicle?.id !== vehicle.id) {
										(e.currentTarget as HTMLElement).style.background =
											'var(--bg-raised)';
									}
								}}
								onMouseLeave={(e) => {
									if (selectedVehicle?.id !== vehicle.id) {
										(e.currentTarget as HTMLElement).style.background =
											'transparent';
									}
								}}>
								<div
									style={{
										width: 36,
										height: 36,
										borderRadius: 8,
										background: vehicle.color,
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										fontSize: 18,
									}}>
									{vehicle.icon}
								</div>
								<div>
									<div style={{ fontSize: 13, fontWeight: 600 }}>
										{vehicle.id}
									</div>
									<div style={{ fontSize: 10, color: 'var(--text-muted)' }}>
										{vehicle.plate}
									</div>
								</div>
								<div style={{ fontSize: 13 }}>{vehicle.type}</div>
								<div style={{ fontSize: 13 }}>{vehicle.driver || '—'}</div>
								<div>
									<Pill
										label={getStatusLabel(vehicle.status)}
										color={getStatusColor(vehicle.status)}
									/>
								</div>
								<div>
									<div style={{ fontSize: 13, fontWeight: 500 }}>
										{vehicle.fuel || vehicle.battery}
									</div>
									<div
										style={{
											marginTop: 4,
											height: 3,
											background: 'var(--bg-sunken)',
											borderRadius: 2,
											overflow: 'hidden',
											width: 60,
										}}>
										<div
											style={{
												width:
													vehicle.fuel ?
														vehicle.fuel.replace('%', '')
													:	vehicle.battery?.replace('%', ''),
												height: '100%',
												background:
													vehicle.status === 'maintenance' ?
														'var(--warning)'
													:	'var(--success)',
												borderRadius: 2,
											}}
										/>
									</div>
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

				{/* Vehicle Details Panel */}
				{selectedVehicle ?
					<Card>
						<CardHeader
							title='Vehicle Details'
							right={
								<button
									onClick={() => setSelectedVehicle(null)}
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
									background: selectedVehicle.color,
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									fontSize: 40,
									margin: '0 auto 12px',
								}}>
								{selectedVehicle.icon}
							</div>
							<h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>
								{selectedVehicle.id}
							</h3>
							<Pill
								label={getStatusLabel(selectedVehicle.status)}
								color={getStatusColor(selectedVehicle.status)}
							/>
						</div>

						<div
							style={{ borderTop: '1px solid var(--border)', paddingTop: 16 }}>
							<div style={{ marginBottom: 12 }}>
								<div
									style={{
										fontSize: 11,
										color: 'var(--text-muted)',
										marginBottom: 4,
									}}>
									Vehicle Type
								</div>
								<div style={{ fontSize: 14, fontWeight: 500 }}>
									{selectedVehicle.type}
								</div>
							</div>
							<div style={{ marginBottom: 12 }}>
								<div
									style={{
										fontSize: 11,
										color: 'var(--text-muted)',
										marginBottom: 4,
									}}>
									License Plate
								</div>
								<div style={{ fontSize: 14, fontWeight: 500 }}>
									{selectedVehicle.plate}
								</div>
							</div>
							<div style={{ marginBottom: 12 }}>
								<div
									style={{
										fontSize: 11,
										color: 'var(--text-muted)',
										marginBottom: 4,
									}}>
									Assigned Driver
								</div>
								<div style={{ fontSize: 14, fontWeight: 500 }}>
									{selectedVehicle.driver || 'Unassigned'}
								</div>
							</div>
							<div style={{ marginBottom: 12 }}>
								<div
									style={{
										fontSize: 11,
										color: 'var(--text-muted)',
										marginBottom: 4,
									}}>
									Total Mileage
								</div>
								<div style={{ fontSize: 14, fontWeight: 500 }}>
									{selectedVehicle.mileage}
								</div>
							</div>
							<div style={{ marginBottom: 12 }}>
								<div
									style={{
										fontSize: 11,
										color: 'var(--text-muted)',
										marginBottom: 4,
									}}>
									Last Maintenance
								</div>
								<div style={{ fontSize: 14, fontWeight: 500 }}>
									{selectedVehicle.lastMaintenance}
								</div>
							</div>
							<div style={{ marginBottom: 16 }}>
								<div
									style={{
										fontSize: 11,
										color: 'var(--text-muted)',
										marginBottom: 4,
									}}>
									Next Maintenance
								</div>
								<div style={{ fontSize: 14, fontWeight: 500 }}>
									{selectedVehicle.nextMaintenance}
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
								Schedule Maintenance
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
								minHeight: 500,
								color: 'var(--text-muted)',
								textAlign: 'center',
							}}>
							<div>
								<div style={{ fontSize: 48, marginBottom: 12 }}>🚚</div>
								<div style={{ fontSize: 14 }}>
									Select a vehicle to view details
								</div>
							</div>
						</div>
					</Card>
				}
			</div>
		</div>
	);
}
