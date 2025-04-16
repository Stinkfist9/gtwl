<script>
	let { children } = $props();
	import "../app.css";
</script>

<nav class="bg-black text-white fixed w-full z-20 top-0 start-0 border-b border-gray-800">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    
    <!-- Logo -->
    <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="/gtwlwhite.png" class="h-12" alt="GTWL Logo">
    </a>

    <!-- CTA & Hamburger -->
    <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button type="button" class="text-black bg-white hover:bg-gray-200 focus:ring-2 focus:outline-none focus:ring-white font-medium rounded-lg text-sm px-4 py-2 text-center">
        Get started
      </button>
      <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-300 rounded-lg md:hidden hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 17 14" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1h15M1 7h15M1 13h15" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>

    <!-- Nav Items -->
    <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
      <ul class="flex flex-col p-4 md:p-0 mt-4 font-bold text-sm border border-gray-700 rounded-lg bg-gray-900 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-black uppercase">
        <li><a href="/" class="block py-2 px-3 text-white hover:text-gray-300">Home</a></li>
        <li><a href="/about" class="block py-2 px-3 text-white hover:text-gray-300">About</a></li>
        <li><a href="/" class="block py-2 px-3 text-white hover:text-gray-300">Services</a></li>
        <li><a href="/" class="block py-2 px-3 text-white hover:text-gray-300">Contact</a></li>
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
      <img src="/gtwlwhite.png" alt="GTWL Logo" class="w-40 sm:w-52" />
    </div>
  
    <!-- Copyright -->
    <div class="text-center text-sm text-gray-400">
      &copy; {new Date().getFullYear()} GT World League. All rights reserved.
    </div>
  </div>
</footer>
