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
			<nav class="hidden md:flex space-x-6 text-sm font-extrabold tracking-wide uppercase">
				<a href="/" class="hover:text-gray-300 transition">home</a>
        <a href="/about" class="hover:text-gray-300 transition">about</a>
			</nav>
		</div>
	</header>

	<!-- Main content -->
	<main class="flex-1">
		{@render children()}
	</main>

<!-- Footer -->
<footer class="bg-black text-white py-12 mt-16 relative">
  <div class="max-w-7xl mx-auto px-6 space-y-12">
    <!-- Partners Row -->
    <hr class="border-gray-600">
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center justify-center">
      {#each Array(6) as _, i}
        <img src={`/partner-logo-${i + 1}.png`} alt={`Partner ${i + 1}`} class="w-24 mx-auto opacity-80 hover:opacity-100 transition" />
      {/each}
    </div>
    <hr class="border-gray-600">
  
    <!-- League Logo -->
    <div class="flex justify-center">
      <img src="/gtwl.png" alt="GTWL Logo" class="w-40 sm:w-52" />
    </div>
  
    <!-- Copyright -->
    <div class="text-center text-sm text-gray-400">
      &copy; {new Date().getFullYear()} Gran Turismo World League. All rights reserved.
    </div>
  </div>

  <!-- Overlay Gran Turismo Logo in Bottom Right -->
  <div class="absolute bottom-0 right-0 p-6 z-10">
    <img src="/gtlogowhite.png" alt="GTWL Logo" class="w-32 sm:w-150 opacity-10" />
  </div>
</footer>
</div>