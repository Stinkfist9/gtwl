<script lang="ts">
	import Image from '$lib/components/image.svelte';
	import Markdown from '$lib/components/markdown.svelte';

	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const imageOptions = {
		sizes: [{ width: 400, maxWidth: 400 }, { width: 640 }]
	};
</script>

<!-- Post Page Design: Image at the top, followed by Title, Description, and Content -->

<section class="bg-black text-white px-6 py-32 pb-45 max-w-4xl mx-auto">
	<!-- Image at the very top -->
	<img
		src={data.image.src}
		alt={data.title}
		width={data.image.width}
		height={data.image.height}
		class="mb-8"
	/>

	<!-- Post Title -->
	<h1 class="text-3xl font-bold mb-2">{data.title}</h1>

	<!-- Post Description -->
	<h2 class="text-lg text-gray-300 mb-4">{data.description}</h2>

	<!-- Optional Text (if exists) -->
	{#if data.optional}
		<h3 class="text-sm text-gray-400 mb-4">{data.optional}</h3>
	{/if}

	<!-- Post Content (Markdown Rendering) -->
	<Markdown hast={data.body} {imageOptions} />
</section>

