<template>
  <div class="navbar bg-navy shadow-sm">
    <div class="navbar-start lg:w-1/2 w-full">
      <div class="dropdown">
        <div
          tabindex="0"
          role="button"
          class="btn btn-ghost text-cream lg:hidden active:bg-transparent"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabindex="0"
          class="menu menu-lg dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow-xl ring-navy ring-1 bg-angel"
        >
          <li><NuxtLink to="home">Home</NuxtLink></li>
          <li><NuxtLink to="about">About</NuxtLink></li>
          <li><NuxtLink to="enrichment">Enrichment</NuxtLink></li>
          <li><NuxtLink to="faq">FAQ</NuxtLink></li>
        </ul>
      </div>
      <NuxtLink to="home" class="text-xl text-cream w-full"
        >Thrive Academy</NuxtLink
      >
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1 text-cream">
        <li><NuxtLink to="about">About</NuxtLink></li>
        <li><NuxtLink to="enrichment">Enrichment</NuxtLink></li>
        <li><NuxtLink to="faq">FAQ</NuxtLink></li>
      </ul>
    </div>
    <div class="navbar-end">
      <NuxtLink class="ta-btn-cream">Enroll Now</NuxtLink>
    </div>
  </div>
</template>

<style scoped>
@reference "tailwindcss";

li {
  @apply text-xl;
}
</style>
