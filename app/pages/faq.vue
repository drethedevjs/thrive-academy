<script lang="ts" setup>
import faqs from "../data/faq";
</script>
<template>
  <main class="ta-container">
    <h1>FAQ</h1>

    <div
      v-for="faq in faqs"
      :key="faq.id"
      class="collapse collapse-plus bg-base-100 border border-base-300 mb-10 ring-4 ring-navy"
    >
      <input type="radio" name="my-accordion-3" />
      <div class="collapse-title title font-semibold bg-navy text-white">
        {{ faq.question }}
      </div>
      <div class="collapse-content title bg-angel text-navy pt-4">
        {{ faq.answer }}
      </div>
    </div>

    <p class="lg:text-3xl text-xl mb-4">
      Download our Parent Pack for full details, supply lists, and policies.
    </p>

    <button class="ta-btn-navy">Download</button>
  </main>
</template>

<style scoped>
@reference "tailwindcss";

.title {
  @apply lg:text-4xl;
}
</style>
