/** @format */

const MAP_PINS = [
	{ x: 18, y: 28, c: '#1a56db' },
	{ x: 35, y: 52, c: '#16a34a' },
	{ x: 55, y: 22, c: '#7c3aed' },
	{ x: 48, y: 70, c: '#16a34a' },
	{ x: 72, y: 40, c: '#1a56db' },
	{ x: 22, y: 72, c: '#16a34a' },
	{ x: 63, y: 68, c: '#16a34a' },
	{ x: 84, y: 26, c: '#1a56db' },
	{ x: 12, y: 50, c: '#d97706' },
	{ x: 77, y: 60, c: '#16a34a' },
	{ x: 30, y: 18, c: '#7c3aed' },
	{ x: 92, y: 48, c: '#16a34a' },
	{ x: 50, y: 44, c: '#d97706' },
];

export function LiveMap() {
	return (
		<div
			style={{
				background: 'linear-gradient(145deg, #e8eef8 0%, #f0f5fc 100%)',
				borderRadius: 'var(--r-md)',
				border: '1px solid var(--border)',
				height: 162,
				position: 'relative',
				overflow: 'hidden',
			}}>
			<svg
				style={{
					position: 'absolute',
					inset: 0,
					width: '100%',
					height: '100%',
					opacity: 0.18,
				}}
				viewBox='0 0 360 162'
				xmlns='http://www.w3.org/2000/svg'>
				<path
					d='M0,81 Q40,62 90,74 Q130,85 180,66 Q230,48 280,60 Q320,70 360,56'
					stroke='#1a56db'
					strokeWidth='2'
					fill='none'
				/>
				<path
					d='M60,0 Q70,42 85,81 Q100,120 95,162'
					stroke='#1a56db'
					strokeWidth='1.2'
					fill='none'
				/>
				<path
					d='M160,0 Q165,40 168,81 Q171,122 175,162'
					stroke='#1a56db'
					strokeWidth='1.2'
					fill='none'
				/>
				<path
					d='M270,0 Q278,48 272,81 Q266,114 280,162'
					stroke='#1a56db'
					strokeWidth='1.2'
					fill='none'
				/>
				<circle
					cx='88'
					cy='78'
					r='28'
					stroke='#1a56db'
					strokeWidth='1'
					fill='none'
				/>
				<circle
					cx='200'
					cy='66'
					r='20'
					stroke='#1a56db'
					strokeWidth='1'
					fill='none'
				/>
			</svg>
			{MAP_PINS.map((p, i) => (
				<div
					key={i}
					style={{
						position: 'absolute',
						left: `${p.x}%`,
						top: `${p.y}%`,
						transform: 'translate(-50%,-50%)',
					}}>
					<div
						style={{
							position: 'absolute',
							inset: -5,
							borderRadius: '50%',
							border: `2px solid ${p.c}`,
							opacity: 0,
							animation: `pulseRing 2.5s ${(i * 0.3) % 2.4}s infinite`,
						}}
					/>
					<div
						style={{
							width: 10,
							height: 10,
							borderRadius: '50%',
							background: p.c,
							border: '2.5px solid #fff',
							boxShadow: `0 1px 4px rgba(0,0,0,0.18)`,
						}}
					/>
				</div>
			))}
			<div
				style={{
					position: 'absolute',
					bottom: 10,
					left: 10,
					background: 'rgba(255,255,255,0.90)',
					backdropFilter: 'blur(6px)',
					border: '1px solid var(--border)',
					borderRadius: 8,
					padding: '5px 10px',
					fontSize: 11,
					fontFamily: 'var(--font-mono)',
					fontWeight: 500,
					color: 'var(--text-primary)',
				}}>
				⬡ Jeddah · 12 zones
			</div>
		</div>
	);
}
