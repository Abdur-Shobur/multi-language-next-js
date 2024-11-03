// app/api/language/route.js
const lang = [
	{
		message: 'Home page',
		title: 'Home',
		about: 'About us page',
		type: 'en',
	},
	{
		message: 'Hola Mundo',
		title: 'Hola Mundo',
		about: 'Acerca de',
		type: 'es',
	},
	{
		message: 'Bonjour mon monde',
		title: 'Bonjour mon monde',
		about: 'A propos de',
		type: 'fr',
	},
	{
		message: 'স্বাগত পৃষ্ঠা',
		title: 'স্বাগত পৃষ্ঠা',
		about: 'সম্পর্কে আমাদের',
		type: 'bn',
	},
];
export async function GET(request: Request) {
	// Parse the request URL to get query parameters
	const { searchParams } = new URL(request.url);
	const languageParam = searchParams.get('lang'); // Get the 'lang' query parameter

	// For demonstration, we can return different messages based on 'lang'
	let message;
	if (languageParam === 'en') {
		message = lang.find((item) => item.type === 'en');
	} else if (languageParam === 'es') {
		message = lang.find((item) => item.type === 'es');
	} else if (languageParam === 'fr') {
		message = lang.find((item) => item.type === 'fr');
	} else if (languageParam === 'bn') {
		message = lang.find((item) => item.type === 'bn');
	} else {
		message = lang.find((item) => item.type === 'en');
	}

	// Return the response
	return new Response(JSON.stringify(message), {
		headers: { 'Content-Type': 'application/json' },
	});
}
