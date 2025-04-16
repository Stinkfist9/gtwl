<script lang="ts">
	import type { PostMetadata } from '$lib/posts';

	export let data: {
		posts: PostMetadata[];
		championships: { title: string; description: string; image: string; season: string; slug: string }[];
	};
</script>

<section
	class="relative min-h-[75vh] bg-black text-white bg-cover bg-center overflow-hidden border-b border-gray-800 flex items-center justify-center"
	style="background-image: url('/mazda.jpg');"
>
	<!-- Overlay -->
	<div class="absolute inset-0 bg-black/60 z-0"></div>

	<!-- Content -->
	<div class="relative z-10 max-w-screen-xl text-center px-4">
		<!-- Badge -->
		<a href="/" class="inline-flex justify-between items-center py-1 px-1 pe-4 mb-7 text-sm text-white bg-gray-800 rounded-full hover:bg-gray-700">
			<span class="text-xs bg-white text-black font-bold rounded-full px-4 py-1.5 me-3">New</span>
			<span class="text-sm font-medium">GTWL platform update! See what's new</span>
			<svg class="w-2.5 h-2.5 ms-2 rtl:rotate-180" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 6 10">
				<path d="M1 9l4-4-4-4" stroke-linecap="round" stroke-linejoin="round" />
			</svg>
		</a>

		<!-- Title -->
		<h1 class="italic uppercase mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl" style="font-family: 'UniviaPro', sans-serif;">
			<span class="text-transparent bg-clip-text bg-gradient-to-r from-[#d4d4d4] via-[#a3a3a3] to-[#f0f0f0]">
				GT World
			</span>
			League
		</h1>

		<!-- Description -->
		<p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
			GTWL powers competitive sim racing for communities who love Gran Turismo's depth and challenge.
		</p>

		<!-- Buttons -->
		<div class="flex flex-col sm:flex-row justify-center gap-4">
			<a href="/season" class="px-6 py-3 rounded-full text-white bg-black border-2 border-white shadow-[0_0_12px_white] flex items-center gap-2 hover:shadow-[0_0_16px_white] transition">
				Season Overview
				<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
				</svg>
			</a>

			<a href="/points-ranking" class="px-6 py-3 rounded-full text-white bg-black border-2 border-white shadow-[0_0_12px_white] flex items-center gap-2 hover:shadow-[0_0_16px_white] transition">
				Points Ranking
				<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
				</svg>
			</a>
		</div>
	</div>
</section>

<!-- Championships -->
{#if data.championships?.length}
	<!-- 🏁 Championships Section (GT-style) -->
	<section class="bg-black text-white py-20 px-4 sm:px-6">
		<div class="max-w-6xl mx-auto">
			<!-- Section Title + Season Badge -->
			<div class="flex flex-col items-start text-left mb-12">
				<h2 class="text-lg sm:text-lg font-bold uppercase tracking-wide mb-2">
					Gran Turismo World League Championships
				</h2>
				<div
					class="inline-block px-4 py-1 rounded-full text-sm font-semibold tracking-wide text-black"
					style="background: linear-gradient(to bottom, #DE9636, #CD7D0E);"
				>
					Season {data.championships[0]?.season}
				</div>
			</div>

			<!-- Cards Grid -->
			<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
				{#each data.championships as championship}
					<a
						href={`/championships/${championship.slug}`}
						class="bg-white text-black border border-gray-800 rounded-xl overflow-hidden shadow hover:shadow-lg transition-all block"
						style="font-family: 'UniviaPro', sans-serif;"
					>
						<img
							src={championship.image}
							alt={championship.title}
							class="w-full h-48 object-cover"
						/>
						<div class="p-3 text-center">
							<h3 class="font-bold text-lg">
								{championship.title}
							</h3>
						</div>
					</a>
				{/each}
			</div>
		</div>
	</section>
{/if}

<!-- 📰 News Section -->
{#if data.posts?.length}
<section class="bg-black text-white py-20 px-4 sm:px-6">
	<div class="max-w-6xl mx-auto">
		<!-- Title and Badge -->
		<div class="flex flex-col items-start text-left mb-12">
			<h2 class="text-lg sm:text-lg font-bold uppercase tracking-wide mb-2">News List</h2>
			<div
				class="inline-block px-4 py-1 rounded-full text-sm font-semibold tracking-wide text-black"
				style="background: linear-gradient(to bottom, #DE9636, #CD7D0E);"
			>
				Latest Updates
			</div>
		</div>

		<!-- News Grid -->
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each data.posts as post}
				<a
					href={`/post/${post.slug}`}
					class="relative group overflow-hidden rounded-xl shadow-lg transform transition duration-300 hover:scale-[1.02]"
				>
					<!-- Background Image -->
					<img
						src={post.image}
						alt={post.title}
						class="w-full h-64 object-cover group-hover:brightness-90 transition duration-300"
					/>

					<!-- Fade overlay at the bottom -->
					<div class="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent z-10"></div>

					<!-- Text content -->
					<div class="absolute bottom-4 left-4 right-4 z-20 text-white">
						<h3 class="text-lg sm:text-xl font-bold mb-1">{post.title}</h3>
						<p class="text-sm text-gray-300 line-clamp-2">{post.description}</p>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>
{/if}

