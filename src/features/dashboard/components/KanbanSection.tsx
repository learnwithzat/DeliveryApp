/** @format */

import { KANBAN_COLUMNS } from '../data/kanban.data';
import { COLOR_MAP } from '../utils/colorMap';
import { layoutStyles } from '../styles';

function KanbanCol({ col }: { col: (typeof KANBAN_COLUMNS)[0] }) {
	const c = COLOR_MAP[col.color];
	return (
		<div
			style={{
				background: 'var(--bg-raised)',
				borderRadius: 'var(--r-lg)',
				padding: 14,
				border: '1px solid var(--border)',
				borderTop: `3px solid ${c.text}`,
			}}>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					marginBottom: 12,
				}}>
				<span
					style={{
						fontSize: 11,
						fontWeight: 700,
						letterSpacing: '0.08em',
						textTransform: 'uppercase',
						fontFamily: 'var(--font-mono)',
						color: c.text,
					}}>
					{col.title}
				</span>
				<span
					style={{
						fontSize: 10,
						fontFamily: 'var(--font-mono)',
						background: 'var(--bg-surface)',
						border: '1px solid var(--border)',
						color: 'var(--text-muted)',
						padding: '2px 8px',
						borderRadius: 999,
					}}>
					{col.count}
				</span>
			</div>
			{col.orders.map((o) => (
				<div
					key={o.id}
					style={{
						background: 'var(--bg-surface)',
						border: '1px solid var(--border)',
						borderRadius: 'var(--r-md)',
						padding: '10px 12px',
						marginBottom: 8,
						cursor: 'pointer',
						boxShadow: 'var(--shadow-sm)',
						transition: 'box-shadow 0.18s, transform 0.18s',
					}}
					onMouseEnter={(e) => {
						(e.currentTarget as HTMLElement).style.boxShadow =
							'var(--shadow-md)';
						(e.currentTarget as HTMLElement).style.transform =
							'translateY(-1px)';
					}}
					onMouseLeave={(e) => {
						(e.currentTarget as HTMLElement).style.boxShadow =
							'var(--shadow-sm)';
						(e.currentTarget as HTMLElement).style.transform = 'none';
					}}>
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
							marginBottom: 4,
						}}>
						<span
							style={{
								fontSize: 10,
								fontFamily: 'var(--font-mono)',
								color: 'var(--text-muted)',
								fontWeight: 500,
							}}>
							{o.id}
						</span>
						<span
							style={{
								fontSize: 9,
								fontWeight: 700,
								fontFamily: 'var(--font-mono)',
								padding: '2px 7px',
								borderRadius: 5,
								background: c.bg,
								color: c.text,
								textTransform: 'uppercase',
								letterSpacing: '0.04em',
								border: `1px solid ${c.border}`,
							}}>
							{o.tag}
						</span>
					</div>
					<div
						style={{
							fontSize: 13,
							fontWeight: 600,
							color: 'var(--text-primary)',
						}}>
						{o.name}
					</div>
					<div
						style={{
							fontSize: 11,
							color: 'var(--text-secondary)',
							marginTop: 4,
						}}>
						{o.sub}
					</div>
				</div>
			))}
		</div>
	);
}

export function KanbanSection() {
	return (
		<div style={layoutStyles.kanbanGrid}>
			{KANBAN_COLUMNS.map((col) => (
				<KanbanCol
					key={col.title}
					col={col}
				/>
			))}
		</div>
	);
}
