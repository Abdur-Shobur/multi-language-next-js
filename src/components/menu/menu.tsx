'use client';
import Link from 'next/link';
import React from 'react';
import { useParams, useRouter, usePathname } from 'next/navigation'; // Import usePathname

export function Menu() {
	const params = useParams();
	const router = useRouter(); // Get the router instance
	const pathname = usePathname(); // Get the current pathname
	const [lang, setLang] = React.useState(params.lang || 'en');

	// Define the menu items based on the current language
	const menu = [
		{
			name: 'Home',
			path: '/' + lang, // Updated path for home based on lang
		},
		{
			name: 'About',
			path: '/' + lang + '/about', // Updated path for about based on lang
		},
	];

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
			<ul className="flex gap-3">
				{menu.map((item) => (
					<li key={item.name}>
						<Link href={item.path}>{item.name}</Link>
					</li>
				))}
			</ul>
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
