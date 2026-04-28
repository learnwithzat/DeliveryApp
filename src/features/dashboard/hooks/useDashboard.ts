/** @format */

import { useState, useCallback } from 'react';

export function useDashboard() {
	const [activeTab, setActiveTab] = useState('Overview');
	const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
	const [selectedDateRange, setSelectedDateRange] = useState('Last 7 Days');

	const handleTabChange = useCallback((tab: string) => {
		setActiveTab(tab);
	}, []);

	const toggleSidebar = useCallback(() => {
		setIsSidebarCollapsed((prev) => !prev);
	}, []);

	const handleDateRangeChange = useCallback((range: string) => {
		setSelectedDateRange(range);
	}, []);

	return {
		activeTab,
		setActiveTab: handleTabChange,
		isSidebarCollapsed,
		toggleSidebar,
		selectedDateRange,
		setSelectedDateRange: handleDateRangeChange,
	};
}
