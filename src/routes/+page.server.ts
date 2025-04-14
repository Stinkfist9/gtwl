// src/routes/+page.server.ts
import { getAllPosts } from '$lib/posts';
import { getAllChampionships } from '$lib/championships';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  const posts = getAllPosts();
  const championships = getAllChampionships();
  
  return {
    posts,
    championships
  };
};
