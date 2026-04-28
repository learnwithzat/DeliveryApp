import { KpiData } from '../types/dashboard.types';

export const KPI_DATA: KpiData[] = [
  {
    label: 'Total Orders',
    value: '1,248',
    delta: '+12.5%',
    up: true,
    icon: '📦',
    color: 'blue',
  },
  {
    label: 'Active Drivers',
    value: '48',
    delta: '+4',
    up: true,
    icon: '🚚',
    color: 'green',
  },
  {
    label: 'On-Time Rate',
    value: '94.2%',
    delta: '-1.2%',
    up: false,
    icon: '⏱',
    color: 'amber',
  },
  {
    label: 'Revenue (Today)',
    value: 'SAR 12.4K',
    delta: '+8.1%',
    up: true,
    icon: '💰',
    color: 'violet',
  },
  {
    label: 'Avg Delivery',
    value: '18.4m',
    delta: '-1.2m',
    up: true,
    icon: '🎯',
    color: 'teal',
  },
];