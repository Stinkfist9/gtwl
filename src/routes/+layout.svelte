<script>
	let { children } = $props();
	import "../app.css";
</script>

<div class="flex flex-col min-h-screen bg-black text-white font-sans">
	<!-- Header -->
	<header class="bg-black border-b border-gray-800">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
			<a href="/" class="flex items-center space-x-3">
				<img src="/gtwl.png" alt="GTWL" class="h-12 sm:h-[72px]" />
			</a>
			<nav class="hidden md:flex space-x-6 text-sm font-bold tracking-wide uppercase">
				<a href="/" class="hover:text-orange-400 transition">Home</a>
				<a href="/about" class="hover:text-orange-400 transition">About</a>
				<a href="/post" class="hover:text-orange-400 transition">News</a>
				<a href="/championships" class="hover:text-orange-400 transition">Championships</a>
				<a href="/auth" class="hover:text-orange-400 transition">Login</a>
			</nav>
		</div>
	</header>

	<!-- Main content -->
	<main class="flex-1">
		{@render children()}
	</main>

	<!-- Footer -->
  <footer class="bg-black text-white py-12 mt-16">
    <div class="max-w-7xl mx-auto px-6 space-y-12">
      <!-- Partners Row -->
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center justify-center">
        {#each Array(6) as _, i}
          <img src={`/partner-logo-${i + 1}.png`} alt={`Partner ${i + 1}`} class="w-24 mx-auto opacity-80 hover:opacity-100 transition" />
        {/each}
      </div>
  
      <!-- League Logo -->
      <div class="flex justify-center">
        <img src="/gtwl.png" alt="GTWL Logo" class="w-40 sm:w-52" />
      </div>
  
      <!-- Copyright -->
      <div class="text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Gran Turismo World League. All rights reserved.
      </div>
    </div>
  </footer>
</div>