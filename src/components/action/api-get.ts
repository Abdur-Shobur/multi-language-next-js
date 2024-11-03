export async function getData(lang: string) {
	const res = await fetch(`http://localhost:3001/api/language?lang=${lang}`);
	const data = await res.json();
	return data;
}
