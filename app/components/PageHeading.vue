<script lang="ts" setup>
withDefaults(defineProps<{ textClass?: string }>(), {
  textClass: "text-navy dark:text-white"
});
</script>

<template>
  <h2
    :class="textClass"
    class="!text-center lg:!text-8xl !text-5xl !mb-4 !font-extrabold"
  >
    <slot> Header Goes Here </slot>
  </h2>

  <hr class="border-angel w-1/2 border-2 lg:mb-20 mb-10 mx-auto" />
</template>
