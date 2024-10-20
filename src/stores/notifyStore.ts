import { defineStore } from 'pinia'

export interface Notification {
  message: string
  type: NotificationType
  notifyTime: number
}

export enum NotificationType {
  Info = 'toast-info',
  Success = 'toast-success',
  Warning = 'toast-warning',
  Error = 'toast-error'
}

interface State {
  notifications: Notification[]
}

export const useNotifyStore = defineStore('notify', {
  state: (): State => ({
    notifications: []
  }),
  actions: {
    notify(type: NotificationType, message: string) {
      const notification: Notification = { message, type, notifyTime: Date.now() }
      this.notifications.push(notification)
      setTimeout(() => this.removeNotification(notification), 5000) // Auto-remove after 5 seconds
    },
    removeNotification(notification: Notification) {
      this.notifications = this.notifications.filter(
        (n) => n.notifyTime !== notification.notifyTime
      )
    }
  }
})
