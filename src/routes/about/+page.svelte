<script>
	// No specific logic needed yet
</script>

<!-- ✅ Hero Section with Background and Logo -->
<section
  class="relative bg-cover bg-center bg-no-repeat text-white py-50"
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
  </div>
</section>

<!-- Main Page Content -->
<section class="bg-black text-white px-6 py-12 max-w-6xl mx-auto space-y-16">
	<!-- About Us -->
	<div class="grid md:grid-cols-2 gap-8 items-center">
		<img src="/gtwl.png" alt="About Us" class="w-full shadow-lg" />
		<div>
			<h2 class="text-2xl font-bold mb-3">About Us</h2>
			<p class="font-semibold text-gray-300">
				We are a dedicated racing league built for competitive drivers who crave a professional yet community-driven atmosphere. 
                With the mission to deliver authentic, thrilling motorsport experiences.
			</p>
		</div>
	</div>

	<!-- Our Story -->
	<div class="grid md:grid-cols-2 gap-8 items-center">
		<div>
			<h2 class="text-2xl font-bold mb-3">Our Story</h2>
			<p class="font-semibold text-gray-300">
				We started as the Veloce Grid Racing League back in January of 2024, in Assetto Corsa Competizione.
                In March of the same year, we shifted our focus on heavily modding our server with Gran Turismo mods in the Assetto Corsa platform.
                After months of endless tweaking of server and car configurations, we finally decided to shift our racing community to the official
                Gran Turismo platform. In May 30 of 2024, we finally rebranded as the Gran Turismo World League and hosted our championships on Gran Turismo 7.

			</p>
		</div>
		<img src="/acc.jpg" alt="Our Story" class="w-full shadow-lg" />
	</div>

	<!-- Our Mission -->
	<div class="grid md:grid-cols-2 gap-8 items-center">
		<img src="/ourmission.jpg" alt="Our Mission" class="w-full shadow-lg" />
		<div>
			<h2 class="text-2xl font-bold mb-3">Our Mission</h2>
			<p class="font-semibold text-gray-300">
				Our mission is to nurture the next generation of sim racers by providing a fair, competitive, and 
                exciting racing environment—open to all skill levels, and focused on growth and sportsmanship.
			</p>
		</div>
	</div>
</section>

<!-- CTA Section with background image and gradient overlay -->
<section class="w-full relative mt-20 h-[400px]">
	<!-- Background Image -->
	<div class="absolute inset-0 bg-cover bg-center" style="background-image: url('/CTA.jpg');"></div>

	<!-- Gradient Overlay -->
	<div class="absolute inset-0 bg-gradient-to-r from-[#3290DE]/80 to-[#DB3267]/60 z-10"></div>

	<!-- Content -->
	<div class="relative z-20 text-white px-6 py-16 flex flex-col items-center justify-center text-center h-full">
		<h2 class="text-3xl font-extrabold mb-4">JOIN THE LEAGUE</h2>
		<p class="text-lg max-w-xl mb-6">
			Become part of the most electrifying online racing league and test your skills against the best.
		</p>
		<a
			href="/"
			class="bg-white text-black font-extrabold px-6 py-3 rounded-full hover:bg-gray-200 transition"
		>
			JOIN NOW
		</a>
	</div>
</section>

