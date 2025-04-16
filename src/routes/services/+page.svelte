<script lang="ts">
    let cardEl: HTMLDivElement;
  
    function handleMouseMove(e: MouseEvent) {
      const rect = cardEl.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      cardEl.style.setProperty('--x', `${x}px`);
      cardEl.style.setProperty('--y', `${y}px`);
    }
  
    function resetHighlight() {
      cardEl.style.removeProperty('--x');
      cardEl.style.removeProperty('--y');
    }
  </script>
  
  <section
    class="relative min-h-[60vh] bg-black text-white bg-cover bg-center overflow-hidden border-b border-gray-800 flex items-center justify-center"
    style="background-image: url('/mazda.jpg');"
  >
    <div class="absolute inset-0 bg-black/60 z-0"></div>
  
    <div class="relative z-10 max-w-screen-xl text-center px-4">
      <h1 class="italic uppercase mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl" style="font-family: 'UniviaPro', sans-serif;">
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#d4d4d4] via-[#a3a3a3] to-[#f0f0f0]">
          GT World
        </span>
        League
      </h1>
      <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
        GTWL powers competitive sim racing for communities who love Gran Turismo's depth and challenge.
      </p>
    </div>
  </section>

  <section class="bg-black text-white py-16 px-4 text-center">
    <img src="/gtwlwhite.png" alt="GT World League Logo" class="mx-auto w-40 mb-6 opacity-90" />
    <h2 class="text-3xl md:text-4xl font-extrabold mb-4" style="font-family: 'UniviaPro', sans-serif;">
      OUR SERVICES
    </h2>
    <p class="max-w-3xl mx-auto text-gray-300 text-lg">
      Our league brings together racers of all levels, from casual players to seasoned competitors, 
			all with a shared love for the Gran Turismo series and motorsports. We are also committed to providing 
      a platform that simplifies everything from race organization to rankings and results publishing.
  </section>
  
<!-- Content -->
<section class="bg-black text-white py-16 px-6 flex justify-center">
    <div
      bind:this={cardEl}
      on:mousemove={handleMouseMove}
      on:mouseleave={resetHighlight}
      class="relative w-full max-w-6xl rounded-2xl border border-gray-700 p-6 overflow-hidden transition-shadow duration-500 shadow-xl group"
      style="--x: 50%; --y: 50%; background: radial-gradient(circle at var(--x) var(--y), rgba(255,255,255,0.1), transparent 60%);"
      role="region"
    >
      <!-- Logos -->
      <div class="flex items-center justify-center gap-6 mb-6">
        <img src="/gtwlwhite.png" alt="GTWL Logo" class="h-12 sm:h-16" />
        <span class="text-2xl sm:text-3xl font-bold text-gray-400">×</span>
        <img src="/partner-logo-2.png" alt="Mirabow Logo" class="h-10 sm:h-14" />
      </div>
  
      <!-- Title -->
      <h2 class="text-3xl font-semibold mb-4 text-center" style="font-family: 'UniviaPro', sans-serif;">
        Racing League Management System
      </h2>
  
      <!-- Description -->
      <p class="mb-8 text-lg text-gray-300 text-center">
        This is a work-in-progress management platform that simplifies everything from race organization to rankings and results publishing.
      </p>
  
      <!-- Marquee -->
      <div class="overflow-hidden relative">
        <div class="flex animate-marquee gap-8 w-max">
          {#each [1, 2, 3, 4, 5, 6] as i}
            <div class="w-[600px] flex-shrink-0">
              <img src={`/sc${i}.png`} alt={`Screenshot ${i}`} class="w-full h-auto rounded-lg shadow-md" />
            </div>
          {/each}
          {#each [1, 2, 3, 4, 5, 6] as i}
            <div class="w-[600px] flex-shrink-0">
              <img src={`/sc${i}.png`} alt={`Screenshot ${i}`} class="w-full h-auto rounded-lg shadow-md" />
            </div>
          {/each}
        </div>
      </div>
      <!-- Coming Soon Button -->
      <div class="mt-8 flex justify-center">
        <button
          class="relative flex items-center gap-2 px-4 py-2 border border-white text-white text-xs font-semibold uppercase rounded-full 
                 animate-pulse-glow hover:bg-white hover:text-black transition"
          disabled
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 4v12" />
          </svg>
          Coming Soon
        </button>
      </div>
    </div>
  </section>
  
  