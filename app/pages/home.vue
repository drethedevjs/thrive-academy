<template>
  <main>
    <div class="hero bg-angel min-h-screen">
      <div class="hero-content text-center">
        <div class="max-w-xl">
          <NuxtImg
            src="/thrive-logo.png"
            alt="Thrive academy logo"
            class="mx-auto mb-10"
          />
          <h1 class="hidden">Thrive Academy</h1>
          <h2 class="!text-3xl !font-thin !text-white">
            Confident Learners. Faith-Filled Leaders
          </h2>
          <p class="py-6 text-xl">
            Welcome to Thrive Micro-School, where students grow in wisdom,
            character, and confidence through a Christ-centered, hands-on
            learning experience.
          </p>
          <div class="lg:w-1/2 w-4/5 flex justify-between mx-auto">
            <NuxtLink to="contact">
              <button class="ta-btn-navy">Schedule Tour</button>
            </NuxtLink>
            <NuxtLink to="contact">
              <button class="ta-btn-cream">Enroll Now</button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <QuickFacts />

    <Testimonials />
  </main>
</template>
