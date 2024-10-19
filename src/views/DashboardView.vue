<template>
  <div class="dashboard-container">
    <div class="side-bar">
      <h1>Dashboard</h1>
      <nav>
        <ul>
          <li class="tab" v-for="tab in tabs" :key="tab.label" :class="{ 'active-tab': tab.isActive }"
            @click="activateTab(tab)">{{ tab.label }}</li>
        </ul>
      </nav>
    </div>
    <div class="content">
      This is content
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Tab {
  label: string;
  isActive: boolean;
  isAuthorized: boolean;
}

const tabTitles: Array<string> = ['Overview', 'Projects', 'Engineering', 'Human Resource', 'Finance', 'Analytics', 'Infrastructure']

const tabs = ref<Tab[]>(tabTitles.map((tabTitle: string) => ({
  label: tabTitle,
  isActive: tabTitle === 'Overview',
  isAuthorized: false
})));

const activateTab = (selectedTab: Tab): void => {
  tabs.value.forEach((tab: Tab) => {
    tab.isActive = false
  });

  selectedTab.isActive = true;
}

</script>

<style scoped>
.dashboard-container {
  @apply flex w-screen h-screen;
}

.side-bar {
  @apply w-60 h-full px-3 py-6 text-[var(--white)] bg-[var(--darker-gray)];
}

.side-bar h1 {
  @apply text-xl px-3 mb-12 font-bold;
}

.tab {
  @apply p-3 my-2 rounded-lg cursor-pointer hover:bg-[var(--light-gray)];
}

.active-tab {
  @apply bg-[var(--ubuntu-orange)] text-white !important;
}

.content {
  @apply flex-auto h-full p-6 text-[var(--white)] bg-[var(--dark-gray)];
}
</style>