'use client';
import React, { useEffect } from 'react';
import { useParams, useRouter, usePathname } from 'next/navigation'; // Import usePathname
import MenuItem from './menu-item';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Menu({ data }: { data: any }) {
	const params = useParams();
	const router = useRouter(); // Get the router instance
	const pathname = usePathname(); // Get the current pathname
	const [lang, setLang] = React.useState(params.lang || 'en');
	useEffect(() => {
		document.documentElement.lang = lang.toString(); // Update the lang attribute of the <html> element
	}, [lang]);

	const handleLangChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const newLang = e.target.value;
		setLang(newLang);

		// Replace the language part of the current pathname
		const updatedPath = pathname.replace(/^\/[a-z]{2}/, `/${newLang}`); // Update language code

		// Navigate to the updated path with the new language
		router.push(updatedPath);
	};

	return (
		<div className="flex justify-center gap-3">
			<MenuItem data={data} />
			<select
				className="bg-transparent"
				value={lang}
				onChange={handleLangChange} // Handle change in language selection
			>
				<option className="bg-black" value="en">
					English
				</option>
				<option className="bg-black" value="es">
					Spanish
				</option>
				<option className="bg-black" value="fr">
					French
				</option>
				<option className="bg-black" value="bn">
					Bengali
				</option>
			</select>
		</div>
	);
}
