<template>
  <div class="table-container">
    <table class="data-table">
      <thead>
        <tr>
          <th v-for="(column, index) in props.columns" :key="index">{{ column }}</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(item, rowIndex) in props.data" :key="rowIndex">
          <td v-for="(column, colIndex) in props.columns" :key="colIndex">{{ item[column] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
/**
 * Props for the data table component
 */
const props = defineProps<{
  /**
   * The columns of the table.
   */
  columns: Array<string>

  /**
   * The data to be displayed in the table.
   */
  data: Array<Record<string, any>>
}>()
</script>

<style scoped>
.table-container {
  @apply overflow-y-auto;
}

.data-table {
  @apply w-full h-full text-white;
}

th {
  @apply sticky top-0 z-10 bg-[var(--darker-gray)];
}

.data-table th,
td {
  @apply p-3 text-right;
}

.data-table tbody tr:nth-child(even) {
  @apply bg-[var(--light-gray)];
}

.data-table tbody tr:nth-child(odd) {
  @apply bg-[var(--medium-gray)];
}
</style>
