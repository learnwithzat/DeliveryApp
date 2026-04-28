/** @format */

export function BarChart({
	values,
	labels,
	color = 'var(--brand)',
	secondaryValues,
	secondaryColor,
	height = 150,
}: {
	values: number[];
	labels: string[];
	color?: string;
	secondaryValues?: number[];
	secondaryColor?: string;
	height?: number;
}) {
	const max = Math.max(...values, ...(secondaryValues ?? [])) * 1.1;
	return (
		<div
			className='flex flex-col gap-0'
			style={{ height }}>
			<div className='flex-1 flex items-end gap-1 relative pb-[22px]'>
				{/* Background Grid Lines */}
				<div className='absolute inset-0 pb-[22px] flex flex-col justify-between pointer-events-none'>
					{[0, 1, 2].map((i) => (
						<div
							key={i}
							className='h-px bg-[var(--border)] w-full'
						/>
					))}
				</div>

				{/* Bars */}
				{values.map((v, i) => {
					const dh = Math.round((v / max) * 100);
					const sh =
						secondaryValues ? Math.round((secondaryValues[i] / max) * 100) : 0;
					return (
						<div
							key={i}
							className='flex-1 flex items-end gap-0.5 h-full'>
							<div
								className='flex-1 rounded-t-[3px] transition-opacity'
								style={{ height: `${dh}%`, background: color }}
								title={`${labels[i]}: ${v}`}
							/>
							{secondaryValues && (
								<div
									className='flex-[0.6] rounded-t-[3px] transition-opacity'
									style={{ height: `${sh}%`, background: secondaryColor }}
									title={`${labels[i]}: ${secondaryValues[i]}`}
								/>
							)}
						</div>
					);
				})}

				{/* X-Axis Labels */}
				<div className='absolute bottom-0 inset-x-0 flex gap-1'>
					{labels.map((l, i) => (
						<div
							key={i}
							className='flex-1 text-center text-[9px] font-mono text-[var(--text-muted)] tracking-wider'>
							{l}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
