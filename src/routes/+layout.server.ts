export const prerender = true;

import { getAllPosts } from '$lib/posts';

export function load() {
	return {
		posts: getAllPosts()
	};
}