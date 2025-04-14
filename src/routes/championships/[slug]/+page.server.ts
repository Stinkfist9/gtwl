import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import fs from 'fs';
import fm from 'front-matter';
import { fromMarkdown } from 'mdast-util-from-markdown';
import { toHast } from 'mdast-util-to-hast';
import { getImageProperties, addImagePropertiesToHast, reduceHast } from '$lib/markdown';

interface Championship {
	title: string;
	description: string;
	image: string;
	season: string;
	draft: boolean;
	slug: string;  // Optional: You can add it if you plan to use it in the template or anywhere else
}

export const load: PageServerLoad = async ({ params }) => {
	try {
		// Get the content of the markdown file dynamically using the slug
		const file = `src/content/championships/${params.slug}.md`;
		const content = fm<Championship>(fs.readFileSync(file, 'utf-8'));

		if (content) {
			const hast = toHast(fromMarkdown(content.body));
			return {
				title: content.attributes.title,
				description: content.attributes.description,
				image: await getImageProperties(content.attributes.image),
				season: content.attributes.season,
				body: hast && (await addImagePropertiesToHast(reduceHast(hast))),
			};
		}

		error(500, 'Error loading championship data');
	} catch (err) {
		console.error(err);
		error(404, 'Championship not found');
	}
};
