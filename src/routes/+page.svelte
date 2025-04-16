<script lang="ts">
	import type { PostMetadata } from '$lib/posts';

	export let data: {
		posts: PostMetadata[];
		championships: { title: string; description: string; image: string; season: string; slug: string }[];
	};
</script>

<section
	class="relative min-h-[60vh] bg-black text-white bg-cover bg-center overflow-hidden border-b border-gray-800 flex items-center justify-center"
	style="background-image: url('/mazda.jpg');"
>
	<!-- Overlay -->
	<div class="absolute inset-0 bg-black/60 z-0"></div>

	<!-- Content -->
	<div class="relative z-10 max-w-screen-xl text-center px-4">

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
		<div class="flex flex-col sm:flex-row justify-center gap-4 font-bold text-sm">
			<a href="/season" class="w-fit mx-auto sm:mx-0 px-4 py-2 rounded-full text-white bg-black border-2 border-white shadow-[0_0_12px_white] flex items-center justify-center gap-2 hover:shadow-[0_0_16px_white] transition text-center">
			  Season Overview
			  <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
			  </svg>
			</a>
		  
			<a href="/post/gtwl-season-2025-standings" class="w-fit mx-auto sm:mx-0 px-4 py-2 rounded-full text-white bg-black border-2 border-white shadow-[0_0_12px_white] flex items-center justify-center gap-2 hover:shadow-[0_0_16px_white] transition text-center">
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
					GT World League Championships
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

