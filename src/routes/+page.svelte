<script lang="ts">
	import type { PostMetadata } from '$lib/posts';

	export let data: {
		posts: PostMetadata[];
		championships: { title: string; description: string; image: string; season: string; slug: string }[];
	};
</script>

<!-- ✅ Hero Section with Background and Logo -->
<section
  class="relative h-[60vh] w-full bg-cover bg-center flex items-center justify-center text-white"
  style="background-image: url('/gtwlcoverpage.jpg');"
>
  <!-- Overlay -->
  <div class="absolute inset-0 bg-[rgba(0,0,0,0.1)] z-0"></div>

  <!-- Content -->
  <div class="relative z-10 max-w-6xl mx-auto text-center px-4 sm:px-6">
    <img
      src="/gtwlouterglow.png"
      alt="GT World League Logo"
      class="mx-auto mb-5 w-40 sm:w-56 md:w-80 lg:w-100 xl:w-200"
    />

	<h1 class="text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-wide font-helvetica text-white"
    style="text-shadow: 0 0 5px rgba(0, 0, 0, 0.7), 0 0 10px rgba(0, 0, 0, 0.6), 0 0 15px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 0, 0, 0.4);">
  	SEASON 2025
	</h1>

    <div class="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">

      <!-- Season Overview Button -->
      <a
        href="/season"
        class="px-6 py-3 rounded-full border border-gray-400 text-white bg-black hover:bg-gray-900 transition-all font-semibold text-sm tracking-wide"
      >
        Season 2025 Overview →
      </a>
    
      <!-- Points Ranking Button -->
      <a
      href="/"
      class="flex items-center gap-3 px-6 py-3 rounded-full border border-gray-400 bg-black text-white hover:bg-gray-900 transition-all font-semibold text-sm tracking-wide"
    >
      <!-- Red Circle with GT Icon -->
      <span class="flex items-center justify-center w-6 h-6 bg-red-600 rounded-full">
        <img src="/icon_ranking.svg" alt="Ranking Icon" class="w-4 h-4" />
      </span>
      Points Ranking →
    </a>
    </div>
  </div>
 <!-- Gradient Overlay Only -->
 <div class="absolute bottom-0 left-0 w-full h-[35%] z-0 pointer-events-none">
	<div class="absolute inset-0 bg-gradient-to-t from-red-600 via-blue-500 to-transparent"></div>
  </div>
</section>

<!-- Navigation Below Hero Banner -->
<nav class="w-full bg-white text-black">
	<ul class="flex justify-center divide-x divide-gray-300 text-sm sm:text-base font-semibold uppercase">
	  {#each ['Round 1', 'Round 2', 'Round 3', 'Grand Final'] as round, index}
		<li class="flex-1 text-center">
		  <a
			href={`#round-${index + 1}`}
			class="block py-4 w-full transition-all duration-300 hover:text-white hover:bg-gradient-to-r from-[#0D8ED1] via-[#7142D9] to-[#D3234D]"
		  >
			{round}
		  </a>
		</li>
	  {/each}
	</ul>
</nav>

<!-- Championships -->
{#if data.championships?.length}
	<!-- 🏁 Championships Section (GT-style) -->
	<section class="bg-black text-white py-20 px-4 sm:px-6">
		<div class="max-w-6xl mx-auto">
			<!-- Section Title + Season Badge -->
			<div class="flex flex-col items-start text-left mb-12">
				<h2 class="text-2xl sm:text-2xl font-bold uppercase tracking-wide mb-2">
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
						class="bg-white text-black border border-gray-600 rounded-xl overflow-hidden shadow hover:shadow-lg transition-all block"
					>
						<img
							src={championship.image}
							alt={championship.title}
							class="w-full h-48 object-cover"
						/>
						<div class="p-3 text-center">
							<h3 class="font-bold text-lg underline">
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
			<!-- Title and Badge aligned to the left -->
			<div class="flex flex-col items-start text-left mb-12">
				<h2 class="text-2xl sm:text-2xl font-bold uppercase tracking-wide mb-2">News List</h2>
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
					<a href={`/post/${post.slug}`} class="border-b border-gray-400 hover:opacity-90 transition">
						<img
							src={post.image}
							alt={post.title}
							class="w-full h-48 object-cover mb-4"
						/>
						<h3 class="text-xl font-bold mb-2">{post.title}</h3>
						<p class="text-sm text-gray-300 mb-4">{post.description}</p>
					</a>
				{/each}
			</div>
		</div>
	</section>
{/if}

