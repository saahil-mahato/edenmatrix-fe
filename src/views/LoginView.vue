<template>
  <div class="login-container">
    <div class="card w-1/4 h-1/3 flex flex-col">
        <h1 class="card-title">Log In</h1>
        <input class="input-field my-6" type="email" id="email" v-model="email" placeholder="Enter your email" />
        <input class="input-field mb-6" type="password" id="password" v-model="password" placeholder="Enter your password" />
        <button class="primary-button w-full mb-3" @click="handleLogin">Login</button>
        <a href="#" class="link text-center">Forgot Password?</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import { HttpStatusCode, type AxiosResponse } from 'axios';

import { post } from '@/utils/http';
import endpoints from '@/endpoints/endpoints';

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