import fs from 'fs';
import path from 'path';
import fm from 'front-matter';

const postsDir = 'src/content/posts';

export interface PostMetadata {
	slug: string;
	title: string;
	description: string;
	image: string;
	draft: boolean;
	optional?: string;
}

export function getAllPosts(): PostMetadata[] {
	const files = fs.readdirSync(postsDir);

	return files
		.filter((file) => file.endsWith('.md'))
		.map((file) => {
			const slug = file.replace('.md', '');
			const content = fs.readFileSync(path.join(postsDir, file), 'utf-8');
			const { attributes } = fm<PostMetadata>(content);

			return {
				slug,
				title: attributes.title,
				description: attributes.description,
				image: attributes.image,
				draft: attributes.draft ?? false,
				optional: attributes.optional
			};
		})
		.filter((post) => !post.draft); // skip drafts
}
