<template>
  <button :class="buttonClass" @click="handleClick">
    {{ text }}
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

/**
 * Props for the Button component.
 */
const props = defineProps<{
  /**
   * The type of the button, either 'primary' or 'secondary'.
   */
  type: 'primary' | 'secondary'

  /**
   * The text to display inside the button.
   */
  text: string

  /**
   * The function to call when the button is clicked.
   * @param event - The click event.
   */
  clickEvent: (event: MouseEvent) => void
}>()

/**
 * Computed property to determine the button's CSS class based on its type.
 */
const buttonClass = computed(() => {
  return `btn-${props.type}`
})

/**
 * Handles the click event by calling the provided clickEvent function.
 *
 * @param event - The click event.
 */
const handleClick = (event: MouseEvent) => {
  props.clickEvent(event)
}
</script>

<style scoped>
.btn-primary {
  @apply p-3 text-[var(--white-color)] bg-[var(--leaf-green)] rounded-md hover:font-extrabold;
}
</style>
