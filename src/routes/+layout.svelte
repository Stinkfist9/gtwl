<script>
	let { children } = $props();
	import "../app.css";
</script>

<nav class="bg-black text-white w-full z-20 sticky top-0 border-b border-gray-800">
  <div class="max-w-7xl flex flex-wrap items-center justify-between mx-auto px-4 py-4">
    <!-- Logo -->
    <a href="/" class="flex items-center space-x-3">
      <img src="/gtwl.png" class="h-10 sm:h-12" alt="GTWL Logo" />
    </a>

    <!-- Hamburger -->
    <div class="flex md:hidden">
      <button
        data-collapse-toggle="navbar-sticky"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600"
        aria-controls="navbar-sticky"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
        </svg>
      </button>
    </div>

    <!-- Nav Items -->
    <div class="hidden w-full md:flex md:w-auto" id="navbar-sticky">
      <ul class="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 text-base font-medium uppercase tracking-wide">
        <li><a href="/" class="block py-2 px-3 hover:underline underline-offset-8 transition">Home</a></li>
        <li><a href="/about" class="block py-2 px-3 hover:underline underline-offset-8 transition">About</a></li>
        <li><a href="/services" class="block py-2 px-3 hover:underline underline-offset-8 transition">Services</a></li>
        <li><a href="/contact" class="block py-2 px-3 hover:underline underline-offset-8 transition">Contact</a></li>
      </ul>
    </div>
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
