<script lang="ts">
	import Markdown from '$lib/components/markdown.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const imageOptions = {
		sizes: [{ width: 400, maxWidth: 400 }, { width: 640 }],
	};
</script>

<section class="bg-black text-white px-6 py-32 pb-45 max-w-4xl mx-auto">

    <img
    src={data.image.src}
    alt={data.title}
    width={data.image.width}
    height={data.image.height}
    class="mb-8"
/>
    
	<h1 class="text-3xl font-bold mb-2">{data.title}</h1>
	<h2 class="text-lg text-gray-300 mb-4">{data.description}</h2>
	<p class="text-sm text-gray-400 italic mb-6">Season: {data.season}</p>

	<Markdown hast={data.body} {imageOptions} />
</section>
