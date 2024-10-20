<template>
  <div class="card-container" @click="handleClick">
    <h1 class="card-heading">{{ heading }}</h1>
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
  heading: string

  /**
   * The function to call when the card is clicked.
   *
   * @param event - The click event.
   */
  clickEvent?: (event: MouseEvent) => void
}>()

/**
 * Handles the click event by calling the provided clickEvent function.
 *
 * @param event - The click event.
 */
const handleClick = (event: MouseEvent) => {
  if (props.clickEvent) {
    props.clickEvent(event)
  }
}
</script>

<style scoped>
.card-container {
  @apply flex flex-col p-6 rounded-xl text-[var(--white)] bg-[var(--darker-gray)];
}

.card-heading {
  @apply text-xl text-center font-bold;
}
</style>
