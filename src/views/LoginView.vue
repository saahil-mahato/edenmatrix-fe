<template>
  <div class="login-container">
    <div class="card w-1/4 h-1/3 flex flex-col">
        <h1 class="card-title">Log In</h1>
        <input class="input-field my-6" type="text" id="username" v-model="username" placeholder="Enter your username" />
        <input class="input-field mb-6" type="password" id="password" v-model="password" placeholder="Enter your password" />
        <button class="primary-button w-full mb-3" @click="handleLogin">Login</button>
        <a href="#" class="link text-center">Forgot Password?</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const username = ref<string>('');
const password = ref<string>('');

const handleLogin = (): void => {};
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