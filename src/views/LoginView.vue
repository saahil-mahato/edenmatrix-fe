<template>
  <div class="login-container">
    <div class="login-card p-6 rounded-xl">
        <h1 class="heading">Log In</h1>
        <div class="field">
          <InputText id="username" v-model="username" placeholder="Enter your username" />
        </div>
        <div class="field">
          <InputText id="password" type="password" v-model="password" placeholder="Enter your password" />
        </div>
        <div class="field">
        <Button class="w-full" label="Login" @click="handleLogin" />
        </div>
        <div class="field text-center">
        <a href="#" class="forgot-password">Forgot Password?</a>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

const username = ref<string>('');
const password = ref<string>('');

const handleLogin = (): void => {
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(/src/assets/background.png);
  background-repeat: no-repeat;
  background-size: cover;
}

.login-card {
  background-color: var(--color-card-bg);
}

.heading {
  color: var(--color-text-green);
  @apply text-xl font-bold text-center;
}

.field {
  @apply m-4;
}

.forgot-password {
  color: var(--color-text-green);
  display: block;
}
</style>