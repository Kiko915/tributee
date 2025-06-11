import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { supabase } from '@/lib/supabase'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  const { data: remoteData } = ref([])

  function increment() {
    count.value++
  }

  async function fetchRemoteData() {
    try {
      const { data, error } = await supabase.from('your_table_name').select()
      if (error) throw error
      remoteData.value = data
    } catch (error) {
      console.error('Error fetching data:', error.message)
    }
  }

  return { count, doubleCount, increment, remoteData, fetchRemoteData }
})
