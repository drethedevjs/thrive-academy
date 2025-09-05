<script lang="ts" setup>
import quickFacts from "../data/quickFacts";
</script>

<template>
  <section id="quick-faqs" class="py-20 lg:px-20 px-10">
    <PageHeading>Quick Facts</PageHeading>

    <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 md:gap-10">
      <div
        :key="fact.id"
        v-for="fact in quickFacts"
        class="faq-box ring-navy bg-angel"
      >
        <Icon :name="fact.icon" size="5em" class="icon text-navy" />
        <h3 class="faq-title">{{ fact.title }}</h3>
        <p :key="fact.id" v-for="text in fact.text" class="faq-text">
          {{ text }}
        </p>
        <small v-if="fact.small">{{ fact.small }}</small>
      </div>
    </div>
  </section>
</template>

<style scoped>
@reference "tailwindcss";

.faq-box {
  @apply py-10 rounded-lg lg:ring-10 ring-5 place-content-center text-center px-5;
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
