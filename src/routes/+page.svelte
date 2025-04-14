<script lang="ts">
	import type { PostMetadata } from '$lib/posts';
  
	export let data: {
	  posts: PostMetadata[];
	  championships: { title: string; description: string; image: string; season: string }[];
	};
  </script>
  
  <h1 class="text-4xl font-extrabold text-center text-gray-800 mb-6">Welcome to SvelteKit</h1>
  <p class="text-center text-lg text-gray-600 mb-8">
	Visit <a href="https://kit.svelte.dev" class="text-blue-500 hover:underline">kit.svelte.dev</a> to read the documentation.
  </p>
  
  <a href="/post/demo-page" class="block text-center text-lg text-blue-500 hover:underline mb-4">
	Link to the demo page
  </a>
  
  <img src="/images/demo-image.jpg@w=100+fm=png.png" alt="demo" width="100" height="100" class="mx-auto mb-8" />
  
  <!-- Content Section -->
  {#if data.posts.length || data.championships.length}
	{#if data.posts.length > 0}
	  <section class="mt-10">
		<h2 class="text-3xl font-bold text-center mb-6">Latest Posts</h2>
		<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
		  {#each data.posts as post}
			<a href={`/post/${post.slug}`} class="block p-4 border rounded-lg hover:shadow-xl transition">
			  <img src={post.image} alt={post.title} class="w-full h-48 object-cover mb-4 rounded-md" />
			  <h3 class="font-semibold text-xl text-gray-800">{post.title}</h3>
			  <p class="text-sm text-gray-600">{post.description}</p>
			</a>
		  {/each}
		</div>
	  </section>
	{/if}
  
	{#if data.championships.length > 0}
	  <section class="mt-12">
		<h2 class="text-3xl font-bold text-center mb-6">Upcoming Championships</h2>
		<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
		  {#each data.championships as championship}
			<div class="block p-4 border rounded-lg hover:shadow-xl transition">
			  <img src={championship.image} alt={championship.title} class="w-full h-48 object-cover mb-4 rounded-md" />
			  <h3 class="font-semibold text-xl text-gray-800">{championship.title}</h3>
			  <p class="text-sm text-gray-600">{championship.description}</p>
			  <p class="mt-2 text-sm text-gray-500">Season: {championship.season}</p>
			</div>
		  {/each}
		</div>
	  </section>
	{/if}
  {:else}
	<div class="text-center text-gray-600">No content available.</div>
  {/if}