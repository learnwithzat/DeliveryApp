/** @format */

import { Color } from '../../features/dashboard/types/dashboard.types';
import { COLOR_MAP } from '../../features/dashboard/utils/colorMap';

export function Pill({ label, color }: { label: string; color: Color }) {
	const c = COLOR_MAP[color];
	return (
		<span
			className='text-[10px] font-semibold font-mono px-[9px] py-[3px] rounded-full whitespace-nowrap tracking-wider border'
			style={{
				background: c.bg,
				color: c.text,
				borderColor: c.border,
			}}>
			{label}
		</span>
	);
}
