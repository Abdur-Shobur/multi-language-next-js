import { getData } from '@/components/action';
import { Menu } from '@/components/menu';
import React from 'react';

export default async function layout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: { lang: string };
}) {
	const { lang } = await params;
	const data = await getData(lang || 'en');

	return (
		<>
			<Menu data={data} />
			{children}
		</>
	);
}
