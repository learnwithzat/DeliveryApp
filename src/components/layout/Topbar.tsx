/** @format */

export function Topbar() {
	return (
		<header className='sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-[var(--border)] p-[0_26px] h-[60px] flex items-center gap-4 shrink-0 shadow-sm'>
			<div className='flex-1'>
				<div className='text-[17px] font-extrabold tracking-tight flex items-center gap-2'>
					<span className='w-2 h-2 rounded-full bg-[var(--success)] inline-block animate-live-blink' />
					Operations Command Center
				</div>
				<div className='text-[11px] text-[var(--text-muted)] font-mono tracking-wider mt-px'>
					REALTIME DISPATCH MONITORING · APR 28 2026
				</div>
			</div>

			<div className='flex items-center gap-2 bg-[var(--bg-surface)] border border-[var(--border-strong)] rounded-[var(--r-md)] p-[0_14px] h-9 w-[230px] text-[13px] text-[var(--text-muted)] cursor-text shadow-sm'>
				<svg
					width='13'
					height='13'
					viewBox='0 0 20 20'
					fill='none'
					stroke='currentColor'
					strokeWidth='2'>
					<circle
						cx='9'
						cy='9'
						r='7'
					/>
					<path d='M15 15l3 3' />
				</svg>
				<span className='flex-1'>Search orders...</span>
				<span className='text-[10px] font-mono bg-[var(--bg-raised)] border border-[var(--border)] text-[var(--text-faint)] p-[1px_6px] rounded'>
					⌘K
				</span>
			</div>

			<button className='h-9 rounded-[var(--r-md)] border border-[var(--border-strong)] bg-[var(--bg-surface)] text-[var(--text-secondary)] text-[13px] font-medium px-[14px] shadow-sm transition-all duration-150 hover:bg-[var(--bg-raised)]'>
				Export
			</button>
			<button className='h-9 rounded-[var(--r-md)] border-none bg-[var(--brand)] text-white text-[13px] font-semibold px-[18px] shadow-[0_2px_8px_rgba(26,86,219,0.28)] transition-all duration-150 hover:bg-[var(--brand-dark)]'>
				+ New Dispatch
			</button>
		</header>
	);
}
