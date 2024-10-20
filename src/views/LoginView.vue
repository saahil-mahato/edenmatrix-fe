<template>
  <div class="login-container">
    <ContentCard heading="Log In" class="w-1/4 h-1/3">
      <InputField class="my-6" type="email" placeholder="Enter your email" v-model="email" />
      <InputField
        class="mb-6"
        type="password"
        placeholder="Enter your password"
        v-model="password"
      />
      <TextButton class="mb-6" type="primary" text="Login" :clickEvent="handleLogin" />
      <a href="#" class="link text-center">Forgot Password?</a>
    </ContentCard>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import { isAxiosError, type AxiosResponse } from 'axios'

import { post } from '@/utils/http'
import endpoints from '@/endpoints/endpoints'

import TextButton from '@/components/TextButton.vue'
import ContentCard from '@/components/ContentCard.vue'
import InputField from '@/components/InputField.vue'

import { useNotifyStore, NotificationType } from '@/stores/notifyStore'

const email = ref<string>('')
const password = ref<string>('')

const router = useRouter()

const notifyStore = useNotifyStore()

/**
 * Handles login for user.
 */
const handleLogin = async (): Promise<void> => {
  let response: AxiosResponse<any, any>
  try {
    const payload = {
      email: email.value,
      password: password.value
    }
    response = await post(endpoints.LOGIN, payload)
    notifyStore.notify(NotificationType.Success, `Welcome ${response.data['user']}!`)
    router.push({ name: 'Dashboard' })
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      notifyStore.notify(
        NotificationType.Error,
        error.response.data['message'] || 'Something went wrong. Please try again'
      )
    } else {
      notifyStore.notify(NotificationType.Error, 'Something went wrong. Please try again')
    }
  }
}
</script>

<style scoped>
.login-container {
  @apply flex justify-center items-center h-screen bg-[url("/src/assets/background.png")] bg-cover;
}
</style>
