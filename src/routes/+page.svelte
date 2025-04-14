<script lang="ts">
	import type { PostMetadata } from '$lib/posts';

	export let data: {
		posts: PostMetadata[];
	};
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<a href="/post/demo-page">Link to the demo page</a>

<img src="/images/demo-image.jpg@w=100+fm=png.png" alt="demo" width="100" height="100" />

<!-- Render blog posts -->
{#if data.posts.length}
	<section class="mt-10">
		<h2 class="text-2xl font-bold mb-4">Latest Posts</h2>
		<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
			{#each data.posts as post}
				<a href={`/post/${post.slug}`} class="block p-4 border rounded-lg hover:shadow-md transition">
					<img src={post.image} alt={post.title} class="w-full h-40 object-cover mb-2 rounded" />
					<h3 class="font-bold">{post.title}</h3>
					<p class="text-sm text-gray-600">{post.description}</p>
				</a>
			{/each}
		</div>
	</section>
{/if}

