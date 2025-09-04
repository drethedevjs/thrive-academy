<template>
  <main>
    <div class="hero bg-angel min-h-screen">
      <div class="hero-content text-center">
        <div class="max-w-xl">
          <NuxtImg
            src="/thrive-logo.png"
            alt="Thrive academy logo"
            width="300"
            class="place-self-center"
          />
          <h1 class="hidden">Thrive Academy</h1>
          <h2 class="text-3xl font-thin text-white">
            Confident Learners. Faith-Filled Leaders
          </h2>
          <p class="py-6 text-xl">
            Welcome to Thrive Micro-School, where students grow in wisdom,
            character, and confidence through a Christ-centered, hands-on
            learning experience.
          </p>
          <div class="w-1/2 place-self-center flex justify-between">
            <button class="ta-btn-navy">Schedule Tour</button>
            <button class="ta-btn-cream">Enroll Now</button>
          </div>
        </div>
      </div>
    </div>
    <div id="quick-faqs" class="py-20 px-20">
      <h2 class="text-center text-8xl mb-4 font-extrabold">Quick Facts</h2>
      <hr class="border-angel w-1/2 border-2 mb-20 place-self-center" />
      <div
        class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 md:gap-10"
      >
        <div class="faq-box ring-navy bg-angel">
          <Icon name="ic:sharp-calendar-month" size="5em" class="icon" />
          <h3 class="faq-title">School Year</h3>
          <p class="faq-text">Sept. 2, 2025 - May 2, 2026</p>
        </div>
        <div class="faq-box ring-navy bg-angel">
          <Icon
            name="material-symbols:nest-clock-farsight-analog-outline"
            size="5em"
            class="icon"
          />
          <h3 class="faq-title">Hours</h3>
          <p class="faq-text">Monday-Thursday</p>
          <p class="faq-text">9:00 AM - 2:00 PM</p>
        </div>
        <div class="faq-box ring-navy bg-angel">
          <Icon name="solar:chat-round-money-bold" size="5em" class="icon" />
          <h3 class="faq-title">Tuition</h3>
          <p class="faq-text">$5,500 per year</p>
          <small>(quarterly payments available)</small>
        </div>
        <div class="faq-box ring-navy bg-angel">
          <Icon name="material-symbols:location-on" size="5em" class="icon" />
          <h3 class="faq-title">Location</h3>
          <p class="faq-text">Brandon/Ruskin, FL</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
@reference "tailwindcss";

.faq-box {
  @apply py-10 rounded-lg ring-10 place-content-center text-center px-5;
}

.faq-title {
  @apply text-4xl font-bold mb-2;
}

.faq-text {
  @apply text-3xl;
}

.icon {
  @apply mb-4;
}
</style>
