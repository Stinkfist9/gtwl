<script>
	let { children } = $props();
	import "../app.css";
</script>

<nav class="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-black text-white rounded-full border border-white shadow-lg px-6 py-1 w-fit backdrop-blur-md md:px-10 md:py-2">
  <div class="flex items-center justify-between space-x-8 md:space-x-12">

    <!-- Logo -->
    <a href="/" class="flex items-center space-x-2 md:flex">
      <img src="/gtwlwhite.png" class="h-6 md:h-8 max-w-full" alt="GTWL Logo">
    </a>

    <!-- Nav Items -->
    <ul class="flex space-x-4 text-xs font-semibold uppercase md:text-sm md:space-x-8">
      <li><a href="/" class="hover:text-gray-300 transition">Home</a></li>
      <li><a href="/about" class="hover:text-gray-300 transition">About</a></li>
      <li><a href="/services" class="hover:text-gray-300 transition">Services</a></li>
    </ul>

    <!-- CTA -->
    <button type="button" class="text-black bg-white hover:bg-gray-100 border border-black font-medium rounded-full text-xs px-3 py-1 transition md:flex hidden">
      Register
    </button>

  </div>
</nav>

	<!-- Main content -->
	<main class="flex-1">
		{@render children()}
	</main>

<!-- Footer -->
<footer class="bg-black text-white py-12 mt-16 relative">
  <div class="max-w-7xl mx-auto px-6 space-y-12">
    <!-- Partners Row -->
    <hr class="my-8 border-t-2 border-white shadow-[0_0_8px_#fff,0_0_16px_#fff] animate-pulse" />
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center justify-center">
      {#each Array(6) as _, i}
        <img src={`/partner-logo-${i + 1}.png`} alt={`Partner ${i + 1}`} class="w-24 mx-auto opacity-80 hover:opacity-100 transition" />
      {/each}
    </div>
    <hr class="my-8 border-t-2 border-white shadow-[0_0_8px_#fff,0_0_16px_#fff] animate-pulse" />
    
    <!-- League Logo -->
    <div class="flex justify-center">
      <img src="/gtwlwhite.png" alt="GTWL Logo" class="w-40 sm:w-52" />
    </div>
  
    <!-- Copyright -->
    <div class="text-center text-sm text-gray-400">
      &copy; {new Date().getFullYear()} GT World League. All rights reserved.
    </div>
  </div>
</footer>
