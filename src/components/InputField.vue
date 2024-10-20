<template>
  <div class="">
    <label v-if="label" for="input-field">{{ label }}</label>
    <input
      class="input-field"
      id="input-field"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="onInput"
    />
  </div>
</template>

<script setup lang="ts">
/**
 * Props for the InputField component.
 * ESLint false positive: Props are used in the template, but
 * TypeScript ESLint doesn't detect the usage in the template.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<{
  /**
   * The type of the input field.
   */
  type: string

  /**
   * The placeholder text for the input field.
   */
  placeholder: string

  /**
   * The label text for the input field.
   */
  label?: string

  /**
   * The value of the input field for two-way binding.
   */
  modelValue: string
}>()

/**
 * Emits an update event to enable two-way data binding.
 */
const emit = defineEmits<(event: 'update:modelValue', value: string) => void>()

/**
 * Handles input events and emits the new value.
 * @param event - The input event.
 */
const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>

<style scoped>
.input-field {
  @apply w-full p-2 rounded-lg text-[var(--white)] bg-[var(--dark-gray)] outline-none border-none;
}
</style>
