<template>
  <div class="container" @click="handleClick">
    <h1 class="heading">{{ heading }}</h1>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
/**
 * Props for the Card component.
 */
const props = defineProps<{
  /**
   * The heading or title of the card.
   */
  heading: string;

  /**
   * The function to call when the card is clicked.
   * @param event - The click event.
   */
  clickEvent?: (event: MouseEvent) => void;
}>();

/**
 * Handles the click event by calling the provided clickEvent function.
 * @param event - The click event.
 */
const handleClick = (event: MouseEvent) => {
  if (props.clickEvent) {
    props.clickEvent(event);
  }
};
</script>

<style scoped>
.container {
  @apply flex flex-col p-6 rounded-xl text-[var(--black-color)] bg-[var(--white-color)]
}

.heading {
  @apply text-xl text-center font-bold;
}
</style>