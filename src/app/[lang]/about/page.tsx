import { getData } from '@/components/action';

export default async function HomePage({
	params,
}: {
	params: { lang: string };
}) {
	// use await other wise get error
	const { lang } = await params;
	const data = await getData(lang);

	return <div className="text-2xl text-center">Data: {data?.about}</div>;
}
