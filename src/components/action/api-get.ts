import { env } from '@/env';

export async function getData(lang: string) {
	const res = await fetch(env.BASE_URL + `/api/language?lang=${lang}`);
	const data = await res.json();
	return data;
}
