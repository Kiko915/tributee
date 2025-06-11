<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
    <!-- Welcome Header -->
    <header class="backdrop-blur-lg bg-black/20 shadow-xl border-b border-white/10">
      <div class="max-w-7xl mx-auto px-4 py-8">
        <div class="flex items-center space-x-3">
          <div class="avatar placeholder">
            <span class="text-4xl wave">👋</span>
          </div>
          <div>
            <h1 class="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Welcome back, {{ profile?.name || 'Friend' }}
            </h1>
            <p class="mt-2 text-gray-300 text-lg">Here are your tributes.</p>
          </div>
        </div>
      </div>
    </header>

    <main class="max-w-7xl mx-auto px-4 py-8 pb-24">
      <!-- Quick Stats -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <!-- Total Tributes Card -->
        <div class="card bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-lg shadow-xl hover:scale-105 transition-all duration-300">
          <div class="card-body">
            <div class="flex items-center justify-between">
              <div>
                <h2 class="card-title text-white/90 text-lg font-medium">Total Tributes</h2>
                <p class="text-4xl font-bold text-white mt-2">12</p>
                <p class="text-white/60 text-sm mt-1">Active memorials</p>
              </div>
              <div class="bg-primary/30 p-4 rounded-2xl">
                <span class="text-3xl">📝</span>
              </div>
            </div>
            <div class="mt-4 pt-4 border-t border-white/10">
              <div class="flex items-center text-white/70 text-sm">
                <span class="text-green-400">↑ 2 new</span>
                <span class="mx-2">•</span>
                <span>This month</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Candles Lit Card -->
        <div class="card bg-gradient-to-br from-secondary/20 to-secondary/5 backdrop-blur-lg shadow-xl hover:scale-105 transition-all duration-300">
          <div class="card-body">
            <div class="flex items-center justify-between">
              <div>
                <h2 class="card-title text-white/90 text-lg font-medium">Candles Lit</h2>
                <p class="text-4xl font-bold text-white mt-2">156</p>
                <p class="text-white/60 text-sm mt-1">Total candles</p>
              </div>
              <div class="bg-secondary/30 p-4 rounded-2xl">
                <span class="text-3xl">🕯️</span>
              </div>
            </div>
            <div class="mt-4 pt-4 border-t border-white/10">
              <div class="flex items-center text-white/70 text-sm">
                <span class="text-yellow-400">↑ 23 new</span>
                <span class="mx-2">•</span>
                <span>Today</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Messages Received Card -->
        <div class="card bg-gradient-to-br from-accent/20 to-accent/5 backdrop-blur-lg shadow-xl hover:scale-105 transition-all duration-300">
          <div class="card-body">
            <div class="flex items-center justify-between">
              <div>
                <h2 class="card-title text-white/90 text-lg font-medium">Messages Received</h2>
                <p class="text-4xl font-bold text-white mt-2">48</p>
                <p class="text-white/60 text-sm mt-1">Total messages</p>
              </div>
              <div class="bg-accent/30 p-4 rounded-2xl">
                <span class="text-3xl">💌</span>
              </div>
            </div>
            <div class="mt-4 pt-4 border-t border-white/10">
              <div class="flex items-center text-white/70 text-sm">
                <span class="text-blue-400">↑ 5 new</span>
                <span class="mx-2">•</span>
                <span>This week</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Tributes List -->
      <div class="mb-8">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-2xl font-bold text-white">Recent Tributes</h2>
          <a href="#" class="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
            See all tributes
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
            </svg>
          </a>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="tribute in tributes" :key="tribute.id"
               class="group card bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-300">
            <div class="card-body flex flex-col h-full">
              <div>
                <div class="flex justify-between items-start mb-4">
                  <div>
                    <h3 class="card-title text-white group-hover:text-primary transition-colors">{{ tribute.name }}</h3>
                    <p class="text-gray-300 text-sm mt-1">
                      {{ tribute.birthDate }} - {{ tribute.deathDate }}
                    </p>
                  </div>
                  <div class="flex items-center">
                    <span class="inline-flex items-center px-3 py-1 rounded-full bg-yellow-400/90 shadow text-gray-900 font-bold text-lg gap-2 border-2 border-yellow-300 drop-shadow-md">
                      <svg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5 text-yellow-600' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M12 3v2m0 4v2m0 4v2m0 4v2m-4-4h8' /></svg>
                      {{ tribute.candles }}
                    </span>
                  </div>
                </div>
                <div class="flex items-center gap-4 mb-4">
                  <div class="flex -space-x-2">
                    <div class="avatar placeholder">
                      <div class="bg-primary/20 text-primary-content rounded-full w-8">
                        <span>👤</span>
                      </div>
                    </div>
                    <div class="avatar placeholder">
                      <div class="bg-secondary/20 text-secondary-content rounded-full w-8">
                        <span>👤</span>
                      </div>
                    </div>
                    <div class="avatar placeholder">
                      <div class="bg-accent/20 text-accent-content rounded-full w-8">
                        <span>👤</span>
                      </div>
                    </div>
                  </div>
                  <span class="text-sm text-gray-300">+12 visitors</span>
                </div>
              </div>
              <div class="card-actions justify-end mt-auto pt-4">
                <button class="btn btn-primary btn-sm min-w-[80px] hover:scale-105 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
                  </svg>
                  View
                </button>
                <button class="btn btn-outline btn-sm min-w-[80px] border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white hover:border-gray-500 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                  Edit
                </button>
                <button class="btn btn-outline btn-sm min-w-[80px] border-red-500/50 text-red-400 hover:bg-red-500/10 hover:text-red-300 hover:border-red-400 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                  </svg>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Messages Panel -->
      <div class="card bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg shadow-xl">
        <div class="card-body">
          <div class="flex justify-between items-center mb-6">
            <h2 class="card-title text-white text-2xl font-bold">Recent Messages</h2>
            <a href="#" class="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
              See all messages
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
              </svg>
            </a>
          </div>
          <div class="space-y-4">
            <div v-for="message in messages" :key="message.id" class="bg-gray-900/70 rounded-xl p-4 shadow flex flex-col gap-2 border border-gray-700/40">
              <p class="text-gray-100 text-base leading-relaxed">{{ message.content }}</p>
              <div class="flex flex-wrap items-center gap-2 text-sm">
                <span class="font-semibold text-primary">{{ message.sender }}</span>
                <span class="text-gray-400">•</span>
                <span class="text-gray-400">for</span>
                <span class="font-medium text-accent">{{ message.tribute }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Bottom Bar with Create and Sign Out buttons -->
    <div class="fixed bottom-0 left-0 right-0 backdrop-blur-lg bg-black/30 border-t border-white/10 p-4">
      <div class="max-w-7xl mx-auto flex justify-between">
        <button class="btn btn-primary glass text-white">
          <span class="text-xl mr-2">+</span>
          Create New Tribute
        </button>
        <button @click="handleLogout" class="btn btn-error text-white">
          Sign Out
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { supabase } from '@/lib/supabase'
import { useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'

const router = useRouter()
const user = ref(null)
const profile = ref(null)

// Mock data
const tributes = ref([
  {
    id: 1,
    name: 'John Smith',
    birthDate: '1950-01-01',
    deathDate: '2020-12-31',
    candles: 42
  },
  {
    id: 2,
    name: 'Mary Johnson',
    birthDate: '1965-05-15',
    deathDate: '2021-03-20',
    candles: 28
  },
  {
    id: 3,
    name: 'Robert Brown',
    birthDate: '1940-11-30',
    deathDate: '2019-07-15',
    candles: 35
  }
])

const messages = ref([
  {
    id: 1,
    content: 'Rest in peace, you will be missed.',
    sender: 'Sarah Wilson',
    tribute: 'John Smith'
  },
  {
    id: 2,
    content: 'Thank you for all the memories.',
    sender: 'Michael Davis',
    tribute: 'Mary Johnson'
  },
  {
    id: 3,
    content: 'A wonderful person who touched many lives.',
    sender: 'Emily Taylor',
    tribute: 'Robert Brown'
  }
])

onMounted(async () => {
  const { data: { user: authUser }, error: authError } = await supabase.auth.getUser()
  
  if (authError || !authUser) {
        router.push('/login')
    return
  }

  user.value = authUser

  // Fetch profile data
  const { data: profileData, error: profileError } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', authUser.id)
    .single()

  if (profileError) {
    console.error('Error fetching profile:', profileError)
    } else {
    profile.value = profileData
    }
})

const handleLogout = async () => {
  await supabase.auth.signOut()
  router.push('/login')
}
</script>

<style scoped>
@keyframes wave {
  0% { transform: rotate(0deg); }
  10% { transform: rotate(14deg); }
  20% { transform: rotate(-8deg); }
  30% { transform: rotate(14deg); }
  40% { transform: rotate(-4deg); }
  50% { transform: rotate(10deg); }
  60% { transform: rotate(0deg); }
  100% { transform: rotate(0deg); }
}

.wave {
  display: inline-block;
  transform-origin: 70% 70%;
  cursor: pointer;
}

.wave:hover {
  animation: wave 1s ease-in-out;
}
</style>