<template>
  <div class="min-h-screen grid grid-cols-1 lg:grid-cols-2">
    <div class="hidden lg:flex flex-col items-center justify-center bg-primary text-primary-content p-12 relative">
      <div class="absolute inset-0 bg-black opacity-20"></div>
      <div class="relative z-10 text-center">
        <img src="/logo/tributee_combination-no-motto.png" alt="Tributee Logo" class="w-1/2 mx-auto mb-8">
        <transition name="fade" mode="out-in">
          <div :key="carouselItems[currentItemIndex].title">
            <h1 class="text-5xl font-bold mb-4">{{ carouselItems[currentItemIndex].title }}</h1>
            <p class="text-xl">{{ carouselItems[currentItemIndex].text }}</p>
          </div>
        </transition>
      </div>
    </div>
    <div class="flex items-center justify-center p-8 sm:p-12 bg-base-100">
      <div class="w-full max-w-md">
        <div class="text-center mb-8 lg:hidden">
          <img src="/logo/tributee_combination-no-motto-white.png" alt="Tributee Logo" class="h-12 mx-auto">
        </div>
        <h2 class="text-3xl font-bold text-center mb-2">Login to Your Account</h2>
        <p class="text-center text-base-content/70 mb-8">Enter your credentials to access your account</p>
        <form @submit.prevent="handleLogin" class="space-y-4" novalidate>
          <div v-if="authError" class="alert alert-error shadow-lg">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>{{ authError }}</span>
            </div>
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email Address</span>
            </label>
            <input type="email" placeholder="you@example.com" class="input input-bordered w-full" :class="{ 'input-error': emailError }" v-model="email" required :disabled="loading">
            <label v-if="emailError" class="label">
              <span class="label-text-alt text-error">{{ emailError }}</span>
            </label>
          </div>
          <div class="form-control">
            <div class="flex justify-between items-center">
                <label class="label">
                    <span class="label-text">Password</span>
                </label>
                <a href="#" class="label-text-alt link link-hover text-sm">Forgot password?</a>
            </div>
            <div class="relative">
              <input :type="showPassword ? 'text' : 'password'" placeholder="••••••••" class="input input-bordered w-full pr-10" :class="{ 'input-error': passwordError }" v-model="password" required :disabled="loading">
              <button type="button" @click="showPassword = !showPassword" class="absolute inset-y-0 right-0 px-3 flex items-center text-gray-500" :disabled="loading">
                <svg v-if="!showPassword" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.022 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.523l8.367 8.367zm1.06-1.06L6.17 5.463a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clip-rule="evenodd" />
                </svg>
              </button>
            </div>
            <label v-if="passwordError" class="label">
              <span class="label-text-alt text-error">{{ passwordError }}</span>
            </label>
          </div>
          <div class="form-control mt-6">
            <button class="btn btn-primary w-full" type="submit" :disabled="loading">
              <span v-if="loading" class="loading loading-spinner"></span>
              <span v-else>Login</span>
            </button>
          </div>
        </form>
        <div class="divider">OR</div>
        <button @click="handleGoogleLogin" class="btn btn-outline w-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M22.56,12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26,1.37-1.04,2.53-2.21,3.31v2.77h3.57c2.08-1.92,3.28-4.74,3.28-8.09Z" fill="#4285F4"/><path d="M12,23c2.97,0,5.46-.98,7.28-2.66l-3.57-2.77c-.98.66-2.23,1.06-3.71,1.06-2.86,0-5.29-1.93-6.16-4.53H2.18v2.84C3.99,20.53,7.7,23,12,23Z" fill="#34A853"/><path d="M5.84,14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43,8.55,1,10.22,1,12s.43,3.45,1.18,4.93l3.66-2.84Z" fill="#FBBC05"/><path d="M12,5.38c1.62,0,3.06.56,4.21,1.64l3.15-3.15C17.45,2.09,14.97,1,12,1,7.7,1,3.99,3.47,2.18,7.07l3.66,2.84c.87-2.6,3.3-4.53,6.16-4.53Z" fill="#EA4335"/></svg>
          Continue with Google
        </button>
        <div class="text-center mt-6">
          <p class="text-base-content/70">Don't have an account? <router-link to="/signup" class="link link-primary font-medium">Sign up</router-link></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const showPassword = ref(false)
const loading = ref(false)
const authError = ref(null)
const emailError = ref(null)
const passwordError = ref(null)
const router = useRouter()

const carouselItems = ref([
  { title: 'Welcome Back!', text: 'Log in to continue to your Tributee account.' },
  { title: 'Discover Amazing Tributes', text: 'Join a community of creators and appreciators.' },
  { title: 'Share Your Own Tributes', text: 'Create and share tributes to the people and things you love.' },
])
const currentItemIndex = ref(0)
let carouselInterval = null

onMounted(async () => {
  const { data: { session } } = await supabase.auth.getSession()
  if (session) {
    router.push('/dashboard')
  }

  carouselInterval = setInterval(() => {
    currentItemIndex.value = (currentItemIndex.value + 1) % carouselItems.value.length
  }, 5000)
})

onUnmounted(() => {
  clearInterval(carouselInterval)
})

const validate = () => {
  emailError.value = null
  passwordError.value = null
  authError.value = null

  if (!email.value) {
    emailError.value = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    emailError.value = 'Please enter a valid email address'
  }

  if (!password.value) {
    passwordError.value = 'Password is required'
  } else if (password.value.length < 6) {
    passwordError.value = 'Password must be at least 6 characters'
  }

  return !emailError.value && !passwordError.value
}

const handleLogin = async () => {
  if (!validate()) {
    return
  }

  loading.value = true
  authError.value = null

  try {
    const { error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    })
    if (error) {
      authError.value = error.message
    } else {
      router.push('/dashboard')
    }
  } catch (error) {
    authError.value = error.message || 'An unexpected error occurred.'
  } finally {
    loading.value = false
  }
}

const handleGoogleLogin = async () => {
  loading.value = true
  authError.value = null
  try {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    })
    if (error) {
      authError.value = error.message
    }
  } catch (error) {
    authError.value = error.message || 'An unexpected error occurred during Google login.'
  } finally {
    loading.value = false
  }
}
</script>