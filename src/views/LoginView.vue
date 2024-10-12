<template>
  <div class="login-container">
    <ContentCard heading="Log In" class="w-1/4 h-1/3">
        <InputField class="my-6" type="email" placeholder="Enter your email" v-model="email" />
        <InputField class="mb-6" type="password" placeholder="Enter your password" v-model="password" />
        <TextButton class="mb-6" type="primary" text="Login" :clickEvent="handleLogin" />
        <a href="#" class="link text-center">Forgot Password?</a>
    </ContentCard>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import { HttpStatusCode, type AxiosResponse } from 'axios';

import { post } from '@/utils/http';
import endpoints from '@/endpoints/endpoints';

import TextButton from '@/components/TextButton.vue';
import ContentCard from '@/components/ContentCard.vue';
import InputField from '@/components/InputField.vue';

const email = ref<string>('');
const password = ref<string>('');

const router = useRouter();

const handleLogin = async (): Promise<void> => {
  try {
    const payload = {
      'email': email.value,
      'password': password.value,
    }
    const response: AxiosResponse<any, any> = await post(endpoints.LOGIN, payload);

    if (response.status === HttpStatusCode.Ok) {
      router.push({ name: 'Dashboard' });
    } else {
      console.error('Login failed:', response.status);
    }
  } catch (error) {
    console.error('Error during login:', error);
  }
};
</script>

<style scoped>
.login-container {
  @apply
  flex
  justify-center
  items-center
  h-screen
  bg-[url("/src/assets/background.png")]
  bg-cover
}
</style>