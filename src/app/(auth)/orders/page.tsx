/** @format */

'use client';

import { useState } from 'react';
import { DRIVERS } from '@/features/dashboard/data/drivers.data';
import { Card, CardHeader } from '@/components/ui/Card';
import { Pill } from '@/components/ui/Pill';
import { Driver, Color } from '@/features/dashboard/types/dashboard.types';

interface Order {
	id: string;
	customer: string;
	location: string;
	items: number;
	total: string;
	status: string;
	priority: string;
	time: string;
	assignedTo: string | null;
	assignedAt: string | null;
	deliveryFee: string;
	distance: string;
	route: string | null;
	taskType: string | null;
	taskRate: string | null;
	notes?: string;
	deliveredAt?: string;
}

interface RouteOption {
	id: string;
	name: string;
	zones: string[];
	distance: string;
	estimatedTime: string;
}

interface TaskType {
	id: string;
	name: string;
	baseRate: number;
	perKm: number;
	icon: string;
}

// Order Data
const INITIAL_ORDERS: Order[] = [
	{
		id: '#1002',
		customer: 'QuickMart',
		location: 'Al Rawdah District, Jeddah',
		items: 3,
		total: 'SAR 128.00',
		status: 'pending',
		priority: 'urgent',
		time: '8 min waiting',
		assignedTo: null,
		assignedAt: null,
		deliveryFee: 'SAR 15.00',
		distance: '2.3 km',
		route: null,
		taskType: null,
		taskRate: null,
	},
	{
		id: '#1003',
		customer: 'City Pharmacy',
		location: 'Al Salamah District, Jeddah',
		items: 1,
		total: 'SAR 45.50',
		status: 'pending',
		priority: 'normal',
		time: '3 min waiting',
		assignedTo: null,
		assignedAt: null,
		deliveryFee: 'SAR 10.00',
		distance: '1.2 km',
		route: null,
		taskType: null,
		taskRate: null,
	},
	{
		id: '#1011',
		customer: 'Fresh Grocer',
		location: 'Al Nahdah District, Jeddah',
		items: 8,
		total: 'SAR 234.00',
		status: 'assigned',
		priority: 'high',
		time: 'Assigned to Ahmed',
		assignedTo: 'Ahmed',
		assignedAt: '2026-04-28 10:30 AM',
		deliveryFee: 'SAR 20.00',
		distance: '0.8 km',
		route: 'North Jeddah Route',
		taskType: 'Grocery Delivery',
		taskRate: 'SAR 45.00',
	},
	{
		id: '#1014',
		customer: 'The Restaurant',
		location: 'Al Andalus District, Jeddah',
		items: 4,
		total: 'SAR 187.50',
		status: 'assigned',
		priority: 'urgent',
		time: 'Assigned to Yasir',
		assignedTo: 'Yasir',
		assignedAt: '2026-04-28 10:45 AM',
		deliveryFee: 'SAR 18.00',
		distance: '1.2 km',
		route: 'East Jeddah Route',
		taskType: 'Food Delivery',
		taskRate: 'SAR 28.00',
	},
	{
		id: '#1020',
		customer: 'Fuel Order',
		location: 'Industrial Zone, Jeddah',
		items: 2,
		total: 'SAR 520.00',
		status: 'on-route',
		priority: 'urgent',
		time: 'ETA 4 min',
		assignedTo: 'Salem',
		assignedAt: '2026-04-28 11:00 AM',
		deliveryFee: 'SAR 25.00',
		distance: '3.5 km',
		route: 'South Jeddah Route',
		taskType: 'Express Delivery',
		taskRate: 'SAR 55.00',
	},
	{
		id: '#1022',
		customer: 'Spare Parts',
		location: 'Al Marwah District, Jeddah',
		items: 5,
		total: 'SAR 342.00',
		status: 'on-route',
		priority: 'high',
		time: 'ETA 9 min',
		assignedTo: 'Rafiq',
		assignedAt: '2026-04-28 10:55 AM',
		deliveryFee: 'SAR 22.00',
		distance: '2.8 km',
		route: 'South Jeddah Route',
		taskType: 'Parcel Delivery',
		taskRate: 'SAR 18.00',
	},
	{
		id: '#1031',
		customer: 'Shop Hub',
		location: 'Al Balad District, Jeddah',
		items: 6,
		total: 'SAR 456.00',
		status: 'delivered',
		priority: 'normal',
		time: 'Done at 14:32',
		assignedTo: 'Ahmed',
		assignedAt: '2026-04-28 1:30 PM',
		deliveredAt: '2026-04-28 2:32 PM',
		deliveryFee: 'SAR 18.00',
		distance: '1.9 km',
		route: 'North Jeddah Route',
		taskType: 'Food Delivery',
		taskRate: 'SAR 22.00',
	},
	{
		id: '#1035',
		customer: 'Flower Boutique',
		location: 'Al Zahra District, Jeddah',
		items: 2,
		total: 'SAR 89.00',
		status: 'delivered',
		priority: 'normal',
		time: 'Done at 14:28',
		assignedTo: 'Yasir',
		assignedAt: '2026-04-28 1:15 PM',
		deliveredAt: '2026-04-28 2:28 PM',
		deliveryFee: 'SAR 12.00',
		distance: '1.1 km',
		route: 'East Jeddah Route',
		taskType: 'Pharmacy Delivery',
		taskRate: 'SAR 17.00',
	},
];

// Available Routes
const AVAILABLE_ROUTES: RouteOption[] = [
	{
		id: 'R001',
		name: 'North Jeddah Route',
		zones: ['Al Rawdah', 'Al Salamah', 'Al Nahdah'],
		distance: '12 km',
		estimatedTime: '35 min',
	},
	{
		id: 'R002',
		name: 'South Jeddah Route',
		zones: ['Al Balad', 'Al Marwah', 'Industrial Zone'],
		distance: '15 km',
		estimatedTime: '45 min',
	},
	{
		id: 'R003',
		name: 'East Jeddah Route',
		zones: ['Al Andalus', 'Al Zahra', 'Al Khalidiyah'],
		distance: '10 km',
		estimatedTime: '30 min',
	},
	{
		id: 'R004',
		name: 'Express Route',
		zones: ['City Center', 'Business District'],
		distance: '5 km',
		estimatedTime: '15 min',
	},
];

// Task Types with Rates
const TASK_TYPES: TaskType[] = [
	{ id: 'food', name: 'Food Delivery', baseRate: 15, perKm: 2, icon: '🍕' },
	{
		id: 'grocery',
		name: 'Grocery Delivery',
		baseRate: 20,
		perKm: 2.5,
		icon: '🛒',
	},
	{
		id: 'pharmacy',
		name: 'Pharmacy Delivery',
		baseRate: 12,
		perKm: 1.5,
		icon: '💊',
	},
	{ id: 'parcel', name: 'Parcel Delivery', baseRate: 10, perKm: 1, icon: '📦' },
	{
		id: 'express',
		name: 'Express Delivery',
		baseRate: 25,
		perKm: 3,
		icon: '⚡',
	},
];

export default function OrdersPage() {
	const [orders, setOrders] = useState<Order[]>(INITIAL_ORDERS);
	const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
	const [filterStatus, setFilterStatus] = useState('all');
	const [showAssignModal, setShowAssignModal] = useState(false);
	const [showCreateModal, setShowCreateModal] = useState(false);
	const [selectedDriver, setSelectedDriver] = useState('');
	const [assigningOrder, setAssigningOrder] = useState<Order | null>(null);

	// Simplified form state
	const [newOrder, setNewOrder] = useState({
		customerName: '',
		customerPhone: '',
		deliveryAddress: '',
		items: [{ name: '', quantity: 1, price: 0 }],
		deliveryFee: 15,
		priority: 'normal',
		routeId: '',
		taskId: '',
		driverId: '',
		notes: '',
	});

	const stats = [
		{
			label: 'Total Orders',
			value: orders.length,
			icon: '📦',
			color: 'var(--brand)',
		},
		{
			label: 'Pending',
			value: orders.filter((o) => o.status === 'pending').length,
			icon: '⏳',
			color: 'var(--warning)',
		},
		{
			label: 'Assigned',
			value: orders.filter((o) => o.status === 'assigned').length,
			icon: '👤',
			color: 'var(--violet)',
		},
		{
			label: 'On Route',
			value: orders.filter((o) => o.status === 'on-route').length,
			icon: '🚚',
			color: 'var(--success)',
		},
		{
			label: 'Delivered',
			value: orders.filter((o) => o.status === 'delivered').length,
			icon: '✅',
			color: 'var(--teal)',
		},
	];

	const statuses = ['all', 'pending', 'assigned', 'on-route', 'delivered'];

	const getStatusColor = (status: string): Color => {
		switch (status) {
			case 'pending':
				return 'amber';
			case 'assigned':
				return 'violet';
			case 'on-route':
				return 'green';
			case 'delivered':
				return 'teal';
			default:
				return 'blue';
		}
	};

	const getPriorityColor = (priority: string): Color => {
		switch (priority) {
			case 'urgent':
				return 'red';
			case 'high':
				return 'amber';
			default:
				return 'blue';
		}
	};

	const calculateTaskRate = () => {
		const task = TASK_TYPES.find((t) => t.id === newOrder.taskId);
		const route = AVAILABLE_ROUTES.find((r) => r.id === newOrder.routeId);
		if (!task || !route) return 0;
		const distance = parseFloat(route.distance.split(' ')[0]);
		return task.baseRate + task.perKm * distance;
	};

	const calculateTotal = () => {
		const itemsTotal = newOrder.items.reduce(
			(sum, item) => sum + item.price * item.quantity,
			0
		);
		return itemsTotal + newOrder.deliveryFee + calculateTaskRate();
	};

	const handleAddItem = () => {
		setNewOrder({
			...newOrder,
			items: [...newOrder.items, { name: '', quantity: 1, price: 0 }],
		});
	};

	const handleRemoveItem = (index: number) => {
		const newItems = newOrder.items.filter((_, i) => i !== index);
		setNewOrder({ ...newOrder, items: newItems });
	};

	const handleItemChange = (index: number, field: string, value: any) => {
		const newItems = [...newOrder.items];
		newItems[index] = { ...newItems[index], [field]: value };
		setNewOrder({ ...newOrder, items: newItems });
	};

	const handleCreateOrder = () => {
		const selectedRoute = AVAILABLE_ROUTES.find(
			(r) => r.id === newOrder.routeId
		);
		const selectedTask = TASK_TYPES.find((t) => t.id === newOrder.taskId);
		const selectedDriverData = DRIVERS.find(
			(d) => d.name === newOrder.driverId
		);

		const order: Order = {
			id: '#' + Math.floor(Math.random() * 9000 + 1000),
			customer: newOrder.customerName,
			location: newOrder.deliveryAddress,
			items: newOrder.items.reduce((sum, item) => sum + item.quantity, 0),
			total: `SAR ${calculateTotal().toFixed(2)}`,
			status: newOrder.driverId ? 'assigned' : 'pending',
			priority: newOrder.priority,
			time:
				newOrder.driverId ? `Assigned to ${newOrder.driverId}` : 'Just created',
			assignedTo: newOrder.driverId || null,
			assignedAt: newOrder.driverId ? new Date().toLocaleString() : null,
			deliveryFee: `SAR ${newOrder.deliveryFee.toFixed(2)}`,
			distance: selectedRoute?.distance || '5 km',
			route: selectedRoute?.name || null,
			taskType: selectedTask?.name || null,
			taskRate: calculateTaskRate() ? `SAR ${calculateTaskRate().toFixed(2)}` : null,
			notes: newOrder.notes,
		};

		setOrders([order, ...orders]);
		setShowCreateModal(false);

		// Reset form
		setNewOrder({
			customerName: '',
			customerPhone: '',
			deliveryAddress: '',
			items: [{ name: '', quantity: 1, price: 0 }],
			deliveryFee: 15,
			priority: 'normal',
			routeId: '',
			taskId: '',
			driverId: '',
			notes: '',
		});
	};

	const handleAssignOrder = (order: Order) => {
		setAssigningOrder(order);
		setShowAssignModal(true);
	};

	const confirmAssignment = () => {
		if (selectedDriver && assigningOrder) {
			setOrders(
				orders.map((order) =>
					order.id === assigningOrder.id ?
						{
							...order,
							status: 'assigned',
							assignedTo: selectedDriver,
							assignedAt: new Date().toLocaleString(),
							time: `Assigned to ${selectedDriver}`,
						}
					:	order
				)
			);
			setShowAssignModal(false);
			setSelectedDriver('');
			setAssigningOrder(null);
		}
	};

	const handleStartDelivery = (order: Order) => {
		setOrders(
			orders.map((o) =>
				o.id === order.id ?
					{
						...o,
						status: 'on-route',
						time: 'ETA ' + Math.floor(Math.random() * 15 + 5) + ' min',
					}
				:	o
			)
		);
	};

	const handleCompleteDelivery = (order: Order) => {
		setOrders(
			orders.map((o) =>
				o.id === order.id ?
					{
						...o,
						status: 'delivered',
						time: `Done at ${new Date().toLocaleTimeString()}`,
					}
				:	o
			)
		);
	};

	const filteredOrders = orders.filter((order) => {
		if (filterStatus === 'all') return true;
		return order.status === filterStatus;
	});

	const availableDrivers = DRIVERS.filter((d) => {
		const assignedOrders = orders.filter(
			(o) => o.assignedTo === d.name && o.status !== 'delivered'
		);
		return assignedOrders.length < 2;
	});

	const taskRate = calculateTaskRate();
	const totalAmount = calculateTotal();

	return (
		<div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
			{/* Breadcrumb */}
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					gap: 8,
					fontSize: 13,
					color: 'var(--text-muted)',
					marginBottom: 8,
				}}>
				<span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
					Orders
				</span>
				<span>/</span>
				<span>Management</span>
			</div>

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
							<span style={{ fontSize: 24 }}>{stat.icon}</span>
						</div>
						<div style={{ fontSize: 28, fontWeight: 800, color: stat.color }}>
							{stat.value}
						</div>
					</div>
				))}
			</div>

			{/* Main Content */}
			<div
				style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 14 }}>
				{/* Orders List */}
				<Card>
					<CardHeader
						title='Order Management'
						right={
							<div style={{ display: 'flex', gap: 8 }}>
								<button
									onClick={() => setShowCreateModal(true)}
									style={{
										padding: '6px 14px',
										borderRadius: 'var(--r-sm)',
										background: 'var(--brand)',
										color: '#fff',
										border: 'none',
										fontSize: 12,
										fontWeight: 600,
										cursor: 'pointer',
										display: 'flex',
										alignItems: 'center',
										gap: 6,
									}}>
									<span>+</span> New Order
								</button>
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
							</div>
						}
					/>

					<div style={{ marginTop: 8 }}>
						{filteredOrders.map((order) => (
							<div
								key={order.id}
								onClick={() => setSelectedOrder(order)}
								style={{
									padding: '16px',
									borderBottom: '1px solid var(--border)',
									cursor: 'pointer',
									transition: 'all 0.15s',
									background:
										selectedOrder?.id === order.id ?
											'var(--brand-light)'
										:	'transparent',
									borderRadius: 'var(--r-md)',
									marginBottom: 4,
								}}
								onMouseEnter={(e) => {
									if (selectedOrder?.id !== order.id) {
										(e.currentTarget as HTMLElement).style.background =
											'var(--bg-raised)';
									}
								}}
								onMouseLeave={(e) => {
									if (selectedOrder?.id !== order.id) {
										(e.currentTarget as HTMLElement).style.background =
											'transparent';
									}
								}}>
								<div
									style={{
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'space-between',
										marginBottom: 8,
									}}>
									<div
										style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
										<span
											style={{
												fontSize: 14,
												fontWeight: 700,
												color: 'var(--text-primary)',
											}}>
											{order.id}
										</span>
										<Pill
											label={order.priority}
											color={getPriorityColor(order.priority)}
										/>
										<Pill
											label={order.status}
											color={getStatusColor(order.status)}
										/>
									</div>
									<span
										style={{
											fontSize: 16,
											fontWeight: 700,
											color: 'var(--text-primary)',
										}}>
										{order.total}
									</span>
								</div>
								<div style={{ fontSize: 15, fontWeight: 600, marginBottom: 4 }}>
									{order.customer}
								</div>
								<div
									style={{
										fontSize: 11,
										color: 'var(--text-muted)',
										marginBottom: 8,
									}}>
									{order.location}
								</div>
								<div
									style={{
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'space-between',
									}}>
									<div style={{ fontSize: 11, color: 'var(--text-secondary)' }}>
										{order.items} items • {order.distance} • Fee:{' '}
										{order.deliveryFee}
									</div>
									<div
										style={{
											fontSize: 11,
											fontFamily: 'var(--font-mono)',
											color: 'var(--text-muted)',
										}}>
										{order.time}
									</div>
								</div>
								{order.route && (
									<div
										style={{
											marginTop: 6,
											fontSize: 10,
											color: 'var(--violet)',
										}}>
										🗺️ {order.route}
									</div>
								)}
								{order.taskType && (
									<div
										style={{
											marginTop: 4,
											fontSize: 10,
											color: 'var(--success)',
										}}>
										📋 {order.taskType} • {order.taskRate}
									</div>
								)}
								{order.assignedTo && (
									<div
										style={{
											marginTop: 4,
											fontSize: 11,
											color: 'var(--success)',
										}}>
										👤 {order.assignedTo}
									</div>
								)}
							</div>
						))}
					</div>
				</Card>

				{/* Order Details Panel */}
				{selectedOrder ?
					<Card>
						<CardHeader
							title='Order Details'
							right={
								<button
									onClick={() => setSelectedOrder(null)}
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
						<div style={{ marginBottom: 20 }}>
							<div
								style={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'space-between',
									marginBottom: 12,
								}}>
								<h3 style={{ fontSize: 20, fontWeight: 700 }}>
									{selectedOrder.id}
								</h3>
								<div style={{ display: 'flex', gap: 6 }}>
									<Pill
										label={selectedOrder.priority}
										color={getPriorityColor(selectedOrder.priority)}
									/>
									<Pill
										label={selectedOrder.status}
										color={getStatusColor(selectedOrder.status)}
									/>
								</div>
							</div>
							<div
								style={{
									borderTop: '1px solid var(--border)',
									paddingTop: 16,
								}}>
								<div style={{ marginBottom: 12 }}>
									<div style={{ fontSize: 11, color: 'var(--text-muted)' }}>
										Customer
									</div>
									<div style={{ fontSize: 15, fontWeight: 600 }}>
										{selectedOrder.customer}
									</div>
								</div>
								<div style={{ marginBottom: 12 }}>
									<div style={{ fontSize: 11, color: 'var(--text-muted)' }}>
										Address
									</div>
									<div style={{ fontSize: 13 }}>{selectedOrder.location}</div>
								</div>
								<div style={{ marginBottom: 12 }}>
									<div style={{ fontSize: 11, color: 'var(--text-muted)' }}>
										Items
									</div>
									<div style={{ fontSize: 13 }}>
										{selectedOrder.items} items
									</div>
								</div>
								<div style={{ marginBottom: 12 }}>
									<div style={{ fontSize: 11, color: 'var(--text-muted)' }}>
										Total
									</div>
									<div
										style={{
											fontSize: 20,
											fontWeight: 700,
											color: 'var(--brand)',
										}}>
										{selectedOrder.total}
									</div>
								</div>
								{selectedOrder.route && (
									<div style={{ marginBottom: 12 }}>
										<div style={{ fontSize: 11, color: 'var(--text-muted)' }}>
											Route
										</div>
										<div style={{ fontSize: 13 }}>{selectedOrder.route}</div>
									</div>
								)}
								{selectedOrder.taskType && (
									<div style={{ marginBottom: 12 }}>
										<div style={{ fontSize: 11, color: 'var(--text-muted)' }}>
											Task
										</div>
										<div style={{ fontSize: 13 }}>{selectedOrder.taskType}</div>
										<div
											style={{
												fontSize: 12,
												color: 'var(--success)',
												marginTop: 4,
											}}>
											Rate: {selectedOrder.taskRate}
										</div>
									</div>
								)}
								{selectedOrder.assignedTo && (
									<>
										<div style={{ marginBottom: 12 }}>
											<div style={{ fontSize: 11, color: 'var(--text-muted)' }}>
												Driver
											</div>
											<div
												style={{
													fontSize: 13,
													fontWeight: 600,
													color: 'var(--success)',
												}}>
												{selectedOrder.assignedTo}
											</div>
										</div>
										<div style={{ marginBottom: 12 }}>
											<div style={{ fontSize: 11, color: 'var(--text-muted)' }}>
												Assigned At
											</div>
											<div style={{ fontSize: 12 }}>
												{selectedOrder.assignedAt}
											</div>
										</div>
									</>
								)}
							</div>
						</div>
						<div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
							{selectedOrder.status === 'pending' && (
								<button
									onClick={() => handleAssignOrder(selectedOrder)}
									style={{
										width: '100%',
										padding: '10px',
										borderRadius: 'var(--r-md)',
										background: 'var(--brand)',
										color: '#fff',
										border: 'none',
										fontSize: 13,
										fontWeight: 600,
										cursor: 'pointer',
									}}>
									👤 Assign Delivery Boy
								</button>
							)}
							{selectedOrder.status === 'assigned' && (
								<button
									onClick={() => handleStartDelivery(selectedOrder)}
									style={{
										width: '100%',
										padding: '10px',
										borderRadius: 'var(--r-md)',
										background: 'var(--violet)',
										color: '#fff',
										border: 'none',
										fontSize: 13,
										fontWeight: 600,
										cursor: 'pointer',
									}}>
									🚚 Start Delivery
								</button>
							)}
							{selectedOrder.status === 'on-route' && (
								<button
									onClick={() => handleCompleteDelivery(selectedOrder)}
									style={{
										width: '100%',
										padding: '10px',
										borderRadius: 'var(--r-md)',
										background: 'var(--success)',
										color: '#fff',
										border: 'none',
										fontSize: 13,
										fontWeight: 600,
										cursor: 'pointer',
									}}>
									✅ Mark as Delivered
								</button>
							)}
							<button
								style={{
									width: '100%',
									padding: '10px',
									borderRadius: 'var(--r-md)',
									background: 'var(--bg-surface)',
									border: '1px solid var(--border)',
									fontSize: 13,
									cursor: 'pointer',
								}}>
								📋 View History
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
								<div style={{ fontSize: 48, marginBottom: 12 }}>📋</div>
								<div>Select an order to view details</div>
							</div>
						</div>
					</Card>
				}
			</div>

			{/* Assign Modal */}
			{showAssignModal && (
				<div
					style={{
						position: 'fixed',
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						background: 'rgba(0,0,0,0.5)',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						zIndex: 1000,
					}}
					onClick={() => setShowAssignModal(false)}>
					<div
						style={{
							background: 'var(--bg-surface)',
							borderRadius: 'var(--r-lg)',
							padding: 24,
							width: 400,
							maxWidth: '90%',
							border: '1px solid var(--border)',
							boxShadow: 'var(--shadow-lg)',
						}}
						onClick={(e) => e.stopPropagation()}>
						<h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16 }}>
							Assign Delivery Boy
						</h3>
						<div style={{ marginBottom: 16 }}>
							<div
								style={{
									fontSize: 13,
									color: 'var(--text-muted)',
									marginBottom: 8,
								}}>
								Order: {assigningOrder?.id}
							</div>
							<div style={{ fontSize: 14, fontWeight: 500, marginBottom: 12 }}>
								{assigningOrder?.customer}
							</div>
							<label
								style={{
									fontSize: 13,
									fontWeight: 500,
									marginBottom: 8,
									display: 'block',
								}}>
								Select Driver
							</label>
							<select
								value={selectedDriver}
								onChange={(e) => setSelectedDriver(e.target.value)}
								style={{
									width: '100%',
									padding: '10px',
									borderRadius: 'var(--r-md)',
									border: '1px solid var(--border)',
									background: 'var(--bg-raised)',
									fontSize: 13,
								}}>
								<option value=''>Choose a driver...</option>
								{availableDrivers.map((driver) => (
									<option
										key={driver.name}
										value={driver.name}>
										{driver.name} - {driver.trips} trips • {driver.rating}
									</option>
								))}
							</select>
						</div>
						<div style={{ display: 'flex', gap: 10 }}>
							<button
								onClick={() => setShowAssignModal(false)}
								style={{
									flex: 1,
									padding: '10px',
									borderRadius: 'var(--r-md)',
									border: '1px solid var(--border)',
									background: 'var(--bg-surface)',
									cursor: 'pointer',
								}}>
								Cancel
							</button>
							<button
								onClick={confirmAssignment}
								disabled={!selectedDriver}
								style={{
									flex: 1,
									padding: '10px',
									borderRadius: 'var(--r-md)',
									background: selectedDriver ? 'var(--brand)' : 'var(--border)',
									color: selectedDriver ? '#fff' : 'var(--text-muted)',
									border: 'none',
									cursor: selectedDriver ? 'pointer' : 'not-allowed',
								}}>
								Assign
							</button>
						</div>
					</div>
				</div>
			)}

			{/* Simplified Create Order Modal - Single Page */}
			{showCreateModal && (
				<div
					style={{
						position: 'fixed',
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						background: 'rgba(0,0,0,0.5)',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						zIndex: 1000,
						overflow: 'auto',
						padding: '20px',
					}}
					onClick={() => setShowCreateModal(false)}>
					<div
						style={{
							background: 'var(--bg-surface)',
							borderRadius: 'var(--r-lg)',
							width: 900,
							maxWidth: '100%',
							maxHeight: '90vh',
							overflow: 'auto',
							border: '1px solid var(--border)',
							boxShadow: 'var(--shadow-lg)',
						}}
						onClick={(e) => e.stopPropagation()}>
						{/* Header */}
						<div
							style={{
								padding: '20px 24px',
								borderBottom: '1px solid var(--border)',
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
								position: 'sticky',
								top: 0,
								background: 'var(--bg-surface)',
								zIndex: 10,
							}}>
							<h3 style={{ fontSize: 18, fontWeight: 700 }}>
								Create New Order
							</h3>
							<button
								onClick={() => setShowCreateModal(false)}
								style={{
									background: 'transparent',
									border: 'none',
									fontSize: 20,
									cursor: 'pointer',
									color: 'var(--text-muted)',
								}}>
								✕
							</button>
						</div>

						{/* Content */}
						<div style={{ padding: '24px' }}>
							{/* 3 Column Layout */}
							<div
								style={{
									display: 'grid',
									gridTemplateColumns: '1fr 1fr 1fr',
									gap: 20,
								}}>
								{/* Column 1: Customer Info */}
								<div>
									<h4
										style={{
											fontSize: 14,
											fontWeight: 600,
											marginBottom: 16,
											color: 'var(--brand)',
										}}>
										📝 Customer Details
									</h4>
									<input
										type='text'
										placeholder='Customer Name'
										value={newOrder.customerName}
										onChange={(e) =>
											setNewOrder({ ...newOrder, customerName: e.target.value })
										}
										style={{
											width: '100%',
											padding: '10px',
											borderRadius: 'var(--r-md)',
											border: '1px solid var(--border)',
											marginBottom: 12,
											fontSize: 13,
										}}
									/>
									<input
										type='tel'
										placeholder='Phone Number'
										value={newOrder.customerPhone}
										onChange={(e) =>
											setNewOrder({
												...newOrder,
												customerPhone: e.target.value,
											})
										}
										style={{
											width: '100%',
											padding: '10px',
											borderRadius: 'var(--r-md)',
											border: '1px solid var(--border)',
											marginBottom: 12,
											fontSize: 13,
										}}
									/>
									<textarea
										placeholder='Delivery Address'
										value={newOrder.deliveryAddress}
										onChange={(e) =>
											setNewOrder({
												...newOrder,
												deliveryAddress: e.target.value,
											})
										}
										rows={3}
										style={{
											width: '100%',
											padding: '10px',
											borderRadius: 'var(--r-md)',
											border: '1px solid var(--border)',
											fontSize: 13,
											resize: 'vertical',
										}}
									/>

									<div style={{ marginTop: 16 }}>
										<div style={{ display: 'flex', gap: 12 }}>
											<div style={{ flex: 1 }}>
												<label
													style={{ fontSize: 11, color: 'var(--text-muted)' }}>
													Delivery Fee (SAR)
												</label>
												<input
													type='number'
													value={newOrder.deliveryFee}
													onChange={(e) =>
														setNewOrder({
															...newOrder,
															deliveryFee: parseFloat(e.target.value),
														})
													}
													style={{
														width: '100%',
														padding: '8px',
														borderRadius: 'var(--r-md)',
														border: '1px solid var(--border)',
														marginTop: 4,
														fontSize: 13,
													}}
												/>
											</div>
											<div style={{ flex: 1 }}>
												<label
													style={{ fontSize: 11, color: 'var(--text-muted)' }}>
													Priority
												</label>
												<select
													value={newOrder.priority}
													onChange={(e) =>
														setNewOrder({
															...newOrder,
															priority: e.target.value,
														})
													}
													style={{
														width: '100%',
														padding: '8px',
														borderRadius: 'var(--r-md)',
														border: '1px solid var(--border)',
														marginTop: 4,
														fontSize: 13,
													}}>
													<option value='normal'>Normal</option>
													<option value='high'>High</option>
													<option value='urgent'>Urgent</option>
												</select>
											</div>
										</div>
									</div>
								</div>

								{/* Column 2: Items */}
								<div>
									<div
										style={{
											display: 'flex',
											justifyContent: 'space-between',
											alignItems: 'center',
											marginBottom: 16,
										}}>
										<h4
											style={{
												fontSize: 14,
												fontWeight: 600,
												color: 'var(--brand)',
											}}>
											🛒 Order Items
										</h4>
										<button
											onClick={handleAddItem}
											style={{
												padding: '4px 12px',
												borderRadius: 'var(--r-sm)',
												background: 'var(--brand-light)',
												color: 'var(--brand)',
												border: 'none',
												fontSize: 11,
												cursor: 'pointer',
											}}>
											+ Add
										</button>
									</div>
									{newOrder.items.map((item, idx) => (
										<div
											key={idx}
											style={{ marginBottom: 12 }}>
											<div style={{ display: 'flex', gap: 8, marginBottom: 4 }}>
												<input
													type='text'
													placeholder='Item'
													value={item.name}
													onChange={(e) =>
														handleItemChange(idx, 'name', e.target.value)
													}
													style={{
														flex: 2,
														padding: '8px',
														borderRadius: 'var(--r-md)',
														border: '1px solid var(--border)',
														fontSize: 12,
													}}
												/>
												<input
													type='number'
													placeholder='Qty'
													value={item.quantity}
													onChange={(e) =>
														handleItemChange(
															idx,
															'quantity',
															parseInt(e.target.value)
														)
													}
													style={{
														flex: 1,
														padding: '8px',
														borderRadius: 'var(--r-md)',
														border: '1px solid var(--border)',
														fontSize: 12,
													}}
												/>
												<input
													type='number'
													placeholder='Price'
													value={item.price}
													onChange={(e) =>
														handleItemChange(
															idx,
															'price',
															parseFloat(e.target.value)
														)
													}
													style={{
														flex: 1,
														padding: '8px',
														borderRadius: 'var(--r-md)',
														border: '1px solid var(--border)',
														fontSize: 12,
													}}
												/>
												{newOrder.items.length > 1 && (
													<button
														onClick={() => handleRemoveItem(idx)}
														style={{
															padding: '8px',
															borderRadius: 'var(--r-md)',
															border: '1px solid var(--border)',
															background: 'var(--danger-bg)',
															color: 'var(--danger)',
															cursor: 'pointer',
															fontSize: 12,
														}}>
														✕
													</button>
												)}
											</div>
										</div>
									))}
									<textarea
										placeholder='Notes (optional)'
										value={newOrder.notes}
										onChange={(e) =>
											setNewOrder({ ...newOrder, notes: e.target.value })
										}
										rows={2}
										style={{
											width: '100%',
											padding: '10px',
											borderRadius: 'var(--r-md)',
											border: '1px solid var(--border)',
											marginTop: 12,
											fontSize: 12,
											resize: 'vertical',
										}}
									/>
								</div>

								{/* Column 3: Route, Task & Driver */}
								<div>
									<div style={{ marginBottom: 20 }}>
										<h4
											style={{
												fontSize: 14,
												fontWeight: 600,
												marginBottom: 12,
												color: 'var(--brand)',
											}}>
											🗺️ Select Route
										</h4>
										{AVAILABLE_ROUTES.map((route) => (
											<div
												key={route.id}
												onClick={() =>
													setNewOrder({ ...newOrder, routeId: route.id })
												}
												style={{
													padding: '10px',
													borderRadius: 'var(--r-md)',
													border:
														newOrder.routeId === route.id ?
															'2px solid var(--brand)'
														:	'1px solid var(--border)',
													marginBottom: 8,
													cursor: 'pointer',
													background:
														newOrder.routeId === route.id ?
															'var(--brand-light)'
														:	'transparent',
												}}>
												<div style={{ fontWeight: 600, fontSize: 13 }}>
													{route.name}
												</div>
												<div
													style={{ fontSize: 10, color: 'var(--text-muted)' }}>
													{route.distance} • {route.estimatedTime}
												</div>
											</div>
										))}
									</div>

									<div style={{ marginBottom: 20 }}>
										<h4
											style={{
												fontSize: 14,
												fontWeight: 600,
												marginBottom: 12,
												color: 'var(--brand)',
											}}>
											📋 Task Type (with Rate)
										</h4>
										{TASK_TYPES.map((task) => {
											const route = AVAILABLE_ROUTES.find(
												(r) => r.id === newOrder.routeId
											);
											const distance =
												route ? parseFloat(route.distance.split(' ')[0]) : 5;
											const rate = task.baseRate + task.perKm * distance;
											return (
												<div
													key={task.id}
													onClick={() =>
														setNewOrder({ ...newOrder, taskId: task.id })
													}
													style={{
														padding: '10px',
														borderRadius: 'var(--r-md)',
														border:
															newOrder.taskId === task.id ?
																'2px solid var(--brand)'
															:	'1px solid var(--border)',
														marginBottom: 8,
														cursor: 'pointer',
														background:
															newOrder.taskId === task.id ?
																'var(--brand-light)'
															:	'transparent',
													}}>
													<div
														style={{
															display: 'flex',
															justifyContent: 'space-between',
															alignItems: 'center',
														}}>
														<div>
															<span style={{ fontSize: 20, marginRight: 8 }}>
																{task.icon}
															</span>
															<span style={{ fontWeight: 600, fontSize: 13 }}>
																{task.name}
															</span>
														</div>
														<span
															style={{
																fontSize: 14,
																fontWeight: 700,
																color: 'var(--success)',
															}}>
															SAR {rate}
														</span>
													</div>
													<div
														style={{
															fontSize: 10,
															color: 'var(--text-muted)',
														}}>
														Base: {task.baseRate} + {task.perKm}/km
													</div>
												</div>
											);
										})}
									</div>

									<div>
										<h4
											style={{
												fontSize: 14,
												fontWeight: 600,
												marginBottom: 12,
												color: 'var(--brand)',
											}}>
											👤 Assign Driver (Optional)
										</h4>
										<select
											value={newOrder.driverId}
											onChange={(e) =>
										setNewOrder({ ...newOrder, driverId: e.target.value })
											}
											style={{
												width: '100%',
												padding: '10px',
												borderRadius: 'var(--r-md)',
												border: '1px solid var(--border)',
												fontSize: 13,
											}}>
											<option value=''>Assign later</option>
											{availableDrivers.map((driver) => (
												<option
													key={driver.name}
													value={driver.name}>
													{driver.name} - {driver.trips} trips
												</option>
											))}
										</select>
									</div>
								</div>
							</div>

							{/* Summary Bar */}
							<div
								style={{
									marginTop: 24,
									padding: 16,
									background: 'var(--bg-raised)',
									borderRadius: 'var(--r-md)',
									display: 'flex',
									justifyContent: 'space-between',
									alignItems: 'center',
								}}>
								<div>
									<div style={{ fontSize: 11, color: 'var(--text-muted)' }}>
										Total Amount
									</div>
									<div
										style={{
											fontSize: 24,
											fontWeight: 800,
											color: 'var(--brand)',
										}}>
										SAR {totalAmount.toFixed(2)}
									</div>
								</div>
								<div style={{ textAlign: 'right' }}>
									<div style={{ fontSize: 11, color: 'var(--text-muted)' }}>
										Items: {newOrder.items.reduce((s, i) => s + i.quantity, 0)}
									</div>
									<div style={{ fontSize: 11, color: 'var(--text-muted)' }}>
										Delivery: SAR {newOrder.deliveryFee}
									</div>
									{taskRate > 0 && (
										<div style={{ fontSize: 11, color: 'var(--success)' }}>
											Task Rate: SAR {taskRate.toFixed(2)}
										</div>
									)}
								</div>
							</div>
						</div>

						{/* Footer */}
						<div
							style={{
								padding: '16px 24px',
								borderTop: '1px solid var(--border)',
								display: 'flex',
								justifyContent: 'flex-end',
								gap: 12,
								position: 'sticky',
								bottom: 0,
								background: 'var(--bg-surface)',
							}}>
							<button
								onClick={() => setShowCreateModal(false)}
								style={{
									padding: '10px 24px',
									borderRadius: 'var(--r-md)',
									border: '1px solid var(--border)',
									background: 'var(--bg-surface)',
									cursor: 'pointer',
								}}>
								Cancel
							</button>
							<button
								onClick={handleCreateOrder}
								disabled={
									!newOrder.customerName ||
									!newOrder.customerPhone ||
									!newOrder.deliveryAddress
								}
								style={{
									padding: '10px 32px',
									borderRadius: 'var(--r-md)',
									background:
										(
											!newOrder.customerName ||
											!newOrder.customerPhone ||
											!newOrder.deliveryAddress
										) ?
											'var(--border)'
										:	'var(--success)',
									color: '#fff',
									border: 'none',
									cursor:
										(
											!newOrder.customerName ||
											!newOrder.customerPhone ||
											!newOrder.deliveryAddress
										) ?
											'not-allowed'
										:	'pointer',
									fontWeight: 600,
								}}>
								Create Order
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
