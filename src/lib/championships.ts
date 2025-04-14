import fs from 'fs';
import path from 'path';
import fm from 'front-matter';

const championshipsDir = 'src/content/championships';

interface Championship {
	title: string;
	description: string;
	image: string;
	season: string;
}

export function getAllChampionships(): Championship[] {
	if (!fs.existsSync(championshipsDir)) return []; // Handle missing folder

	const files = fs.readdirSync(championshipsDir);

	return files
		.filter((file) => file.endsWith('.md'))
		.map((file) => {
			const content = fs.readFileSync(path.join(championshipsDir, file), 'utf-8');
			const { attributes } = fm<Championship>(content);
			return {
				title: attributes.title,
				description: attributes.description,
				image: attributes.image,
				season: attributes.season
			};
		});
}

