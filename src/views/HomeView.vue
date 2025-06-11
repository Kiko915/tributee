<script setup>
import { onMounted } from 'vue'
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()

onMounted(() => {
  store.fetchRemoteData()
})
</script>

<template>
  <main>
    <h1>Supabase Data</h1>
    <p>Count: {{ store.count }}</p>
    <button @click="store.increment" class="btn btn-primary">Increment</button>
    <h2>Remote Data:</h2>
    <pre>{{ store.remoteData }}</pre>
  </main>
</template>
