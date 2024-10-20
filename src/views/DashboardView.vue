<template>
  <div class="dashboard-container">
    <div class="side-bar">
      <h1>Dashboard</h1>
      <nav>
        <ul>
          <li
            class="tab"
            v-for="tab in tabs"
            :key="tab.label"
            :class="{ 'active-tab': tab.isActive }"
            @click="activateTab(tab)"
          >
            {{ tab.label }}
          </li>
        </ul>
      </nav>
    </div>
    <div class="content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { useRouter } from 'vue-router'

/**
 * Interface for tab.
 */
interface Tab {
  label: string
  isActive: boolean
  isAuthorized: boolean
}

/**
 * Titles for tab.
 */
const tabTitles: Array<string> = [
  'Overview',
  'Projects',
  'Engineering',
  'Human Resource',
  'Finance',
  'Analytics',
  'Infrastructure'
]

const router = useRouter()

/**
 * Covert tab titles to tab object.
 */
const tabs = ref<Tab[]>(
  tabTitles.map((tabTitle: string) => ({
    label: tabTitle,
    isActive: tabTitle === 'Overview',
    isAuthorized: false
  }))
)

/**
 * Function to activate a tab.
 *
 * @param selectedTab - The tab that user selects.
 */
const activateTab = (selectedTab: Tab): void => {
  tabs.value.forEach((tab: Tab) => {
    tab.isActive = false
  })

  router.push({ path: `/dashboard/${selectedTab.label.toLowerCase()}` })

  selectedTab.isActive = true
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
  @apply p-3 my-2 rounded-lg cursor-pointer hover:bg-[var(--medium-gray)];
}

.active-tab {
  @apply bg-[var(--leaf-green)] text-white !important;
}

.content {
  @apply flex-auto h-full p-6 text-[var(--white)] bg-[var(--dark-gray)];
}
</style>
