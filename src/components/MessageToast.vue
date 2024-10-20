<template>
  <div class="toast-container">
    <div
      v-for="notification in notifications"
      class="toast"
      :key="notification.notifyTime"
      :class="notification.type"
    >
      <font-awesome-icon
        :icon="getIcon(notification.type)"
        class="toast-icon"
        :style="{ color: getIconColor(notification.type) }"
      />
      <span>{{ notification.message }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useNotifyStore, NotificationType } from '@/stores/notifyStore'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const notifyStore = useNotifyStore()
const { notifications } = storeToRefs(notifyStore)

/**
 * Map for icons.
 */
const iconMap = {
  [NotificationType.Info]: 'info-circle',
  [NotificationType.Success]: 'check-circle',
  [NotificationType.Warning]: 'exclamation-circle',
  [NotificationType.Error]: 'times-circle'
}

/**
 * Map for icon colors.
 */
const colorMap = {
  [NotificationType.Info]: '#A0C4FF', // Light blue
  [NotificationType.Success]: '#B9FBC0', // Light green
  [NotificationType.Warning]: '#FFE156', // Bright yellow
  [NotificationType.Error]: '#FF6F61' // Coral red
}

/**
 * Function to get icon for a notification type.
 *
 * @param type - The type of notification.
 */
const getIcon = (type: NotificationType): string => {
  return iconMap[type] || 'question-circle'
}

/**
 * Function to get color for the icon.
 * @param type - The type of notification.
 */
const getIconColor = (type: NotificationType): string => {
  return colorMap[type] || 'white'
}
</script>

<style scoped>
.toast-container {
  @apply fixed bottom-4 right-4 z-10;
}

.toast {
  @apply flex items-center text-[var(--white)] p-4 m-4 rounded-xl bg-[var(--medium-gray)];
}

.toast-icon {
  @apply m-2;
}
</style>
