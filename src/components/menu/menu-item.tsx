'use client';
import Link from 'next/link';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function MenuItem({ data }: { data: any }) {
	const menu = [
		{
			name: data.message,
			path: '/' + data.type,
		},
		{
			name: data.about,
			path: '/' + data.type + '/about',
		},
	];
	return (
		<ul className="flex gap-3">
			{menu.map((item) => (
				<li key={item.name}>
					<Link href={item.path}>{item.name}</Link>
				</li>
			))}
		</ul>
	);
}
