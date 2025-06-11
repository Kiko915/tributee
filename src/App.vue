<script setup>
import GlobalHeader from './components/GlobalHeader.vue'
import GlobalLoader from './components/GlobalLoader.vue'
import { RouterView, useRoute } from 'vue-router'
import { computed } from 'vue'
import { useLoaderStore } from '@/stores/loader'

const loader = useLoaderStore()
const route = useRoute()
const showHeader = computed(() => {
  return route.name !== 'login' && route.name !== 'signup'
});
</script>

<template>
  <div data-theme="demontown" class="bg-base-200 min-h-screen relative">
    <GlobalLoader v-if="loader.isLoading" class="fixed inset-0 z-50 bg-black/60 flex items-center justify-center" />
    <GlobalHeader v-if="showHeader" />
    <RouterView />
  </div>
</template>
