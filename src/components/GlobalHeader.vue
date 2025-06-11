<template>
  <header class="sticky top-0 z-50 navbar bg-base-100/80 backdrop-blur-xl shadow-lg px-4 md:px-8 border-b border-base-300/20">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow-lg bg-base-100/80 backdrop-blur-xl rounded-box w-64 border border-base-300/20">
          <li class="menu-title mb-2">
            <span class="text-lg font-bold">Menu</span>
          </li>
          <li>
            <router-link 
              to="/" 
              class="font-medium hover:bg-base-200/50 transition-all duration-200"
              :class="{ 'font-bold': $route.path === '/' }"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Home
            </router-link>
          </li>
          <li>
            <router-link 
              to="/about" 
              class="font-medium hover:bg-base-200/50 transition-all duration-200"
              :class="{ 'font-bold': $route.path === '/about' }"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              About
            </router-link>
          </li>
          <div class="divider my-2"></div>
          <li v-if="profile">
            <router-link 
              to="/dashboard" 
              class="font-medium hover:bg-base-200/50 transition-all duration-200"
              :class="{ 'font-bold': $route.path === '/dashboard' }"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Dashboard
            </router-link>
          </li>
          <li v-if="profile">
            <a 
              @click="handleLogout" 
              class="font-medium text-error hover:bg-error/10 transition-all duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Logout
            </a>
          </li>
        </ul>
      </div>
      <router-link to="/" class="flex items-center">
        <img
          src="/logo/tributee_combination-no-motto-white.png"
          alt="Tributee Logo"
          class="h-8 md:h-10"
        />
      </router-link>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li>
          <router-link 
            to="/" 
            class="font-medium hover:bg-base-200/50 transition-all duration-200"
            :class="{ 'font-bold': $route.path === '/' }"
          >
            Home
          </router-link>
        </li>
        <li>
          <router-link 
            to="/about" 
            class="font-medium hover:bg-base-200/50 transition-all duration-200"
            :class="{ 'font-bold': $route.path === '/about' }"
          >
            About
          </router-link>
        </li>
      </ul>
    </div>
    <div class="navbar-end">
      <div v-if="profile" class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img 
              :alt="profile.name || 'User avatar'" 
              :src="profile.avatar_url || `https://ui-avatars.com/api/?name=${encodeURIComponent(profile.name || 'User')}&background=random`" 
            />
          </div>
        </div>
        <ul tabindex="0" class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100/80 backdrop-blur-xl rounded-box w-52 border border-base-300/20">
          <li class="menu-title px-4 py-2">
            <span class="font-medium">{{ profile.name || 'User' }}</span>
          </li>
          <li>
            <router-link 
              to="/dashboard" 
              class="font-medium hover:bg-base-200/50 transition-all duration-200"
              :class="{ 'font-bold': $route.path === '/dashboard' }"
            >
              Dashboard
            </router-link>
          </li>
          <li><a @click="handleLogout" class="font-medium text-error">Logout</a></li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import { supabase } from '@/lib/supabase'
import { ref, onMounted } from 'vue'

const router = useRouter()
const route = useRoute()
const profile = ref(null)

const fetchProfile = async () => {
  try {
    const { data: { user } } = await supabase.auth.getUser()
    if (user) {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single()
      
      if (error) throw error
      profile.value = data
    }
  } catch (error) {
    console.error('Error fetching profile:', error.message)
  }
}

onMounted(() => {
  fetchProfile()
})

const handleLogout = async () => {
  await supabase.auth.signOut()
  router.push('/login')
}
</script>

<style scoped>
.router-link-active {
  background-color: hsl(var(--p));
  color: hsl(var(--pc));
}

.menu li a.active {
  background-color: hsl(var(--p));
  color: hsl(var(--pc));
}

.navbar {
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}
</style>