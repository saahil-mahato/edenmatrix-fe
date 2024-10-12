<template>
  <button :class="buttonClass" @click="handleClick">
    {{ text }}
  </button>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
  type: {
    type: String,
    required: true,
    validator: value => ['primary', 'secondary'].includes(value),
  },
  text: {
    type: String,
    required: true,
  },
  clickEvent: {
    type: Function,
    required: true,
  }
})

const buttonClass = computed(() => {
  return props.type === 'primary' ? 'btn-primary' : 'btn-secondary';
})

const handleClick = (event) => {
  props.clickEvent(event);
}
</script>

<style scoped>
.btn-primary {
  @apply p-3 text-[var(--white-color)] bg-[var(--primary-color)] rounded-md hover:shadow-2xl hover:bg-[var(--primary-hover-color)]
}
</style>