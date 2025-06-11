<template>
  <!-- Hero Section -->
  <motion.div
    tag="section"
    :initial="{ opacity: 0, y: 40 }"
    :whileInView="{ opacity: 1, y: 0 }"
    :transition="{ duration: 0.7, ease: 'easeOut' }"
    :viewport="{ once: true, amount: 0.5 }"
    class="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-20 bg-gradient-to-b from-amber-50 via-white to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 relative"
  >
    <div class="max-w-2xl mx-auto">
      <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">Honoring Lives. Remembering Love.</h1>
      <p class="text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-8">Tributee is a digital space to create and share heartfelt tributes to those we've lost.</p>
      <a href="/create" class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-400 hover:bg-amber-500 text-white font-semibold shadow transition focus:outline-none focus:ring-2 focus:ring-amber-300">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>
        Create a Tribute
      </a>
    </div>
    <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div class="w-40 h-40 bg-amber-100 rounded-full blur-3xl opacity-40 absolute -top-10 -left-10"></div>
      <div class="w-32 h-32 bg-amber-200 rounded-full blur-2xl opacity-30 absolute bottom-0 right-0"></div>
    </div>
  </motion.div>

  <!-- Mission Statement -->
  <motion.div
    tag="section"
    :initial="{ opacity: 0, y: 40 }"
    :whileInView="{ opacity: 1, y: 0 }"
    :transition="{ duration: 0.7, delay: 0.1, ease: 'easeOut' }"
    :viewport="{ once: true, amount: 0.5 }"
    class="max-w-2xl mx-auto px-4 py-12 text-center"
  >
    <p class="text-xl text-gray-800 dark:text-gray-100">We built Tributee to help families preserve memories and celebrate lives with love, grace, and permanence.</p>
  </motion.div>

  <!-- What Tributee Offers -->
  <motion.div
    tag="section"
    :initial="{ opacity: 0, y: 40 }"
    :whileInView="{ opacity: 1, y: 0 }"
    :transition="{ duration: 0.7, delay: 0.2, ease: 'easeOut' }"
    :viewport="{ once: true, amount: 0.5 }"
    class="max-w-5xl mx-auto px-4 py-12"
  >
    <h2 class="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">What Tributee Offers</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      <div class="flex flex-col items-center text-center gap-3">
        <span class="bg-amber-100 text-3xl rounded-full p-4 mb-2">🕯️</span>
        <span class="font-semibold text-gray-900 dark:text-gray-100">Create Online Tributes</span>
      </div>
      <div class="flex flex-col items-center text-center gap-3">
        <span class="bg-blue-100 text-3xl rounded-full p-4 mb-2">💬</span>
        <span class="font-semibold text-gray-900 dark:text-gray-100">Leave Guestbook Messages</span>
      </div>
      <div class="flex flex-col items-center text-center gap-3">
        <span class="bg-pink-100 text-3xl rounded-full p-4 mb-2">📷</span>
        <span class="font-semibold text-gray-900 dark:text-gray-100">Share Photos & Memories</span>
      </div>
      <div class="flex flex-col items-center text-center gap-3">
        <span class="bg-green-100 text-3xl rounded-full p-4 mb-2">👪</span>
        <span class="font-semibold text-gray-900 dark:text-gray-100">Family Collaboration</span>
      </div>
    </div>
  </motion.div>

  <!-- The Story Behind Tributee -->
  <motion.div
    tag="section"
    :initial="{ opacity: 0, y: 40 }"
    :whileInView="{ opacity: 1, y: 0 }"
    :transition="{ duration: 0.7, delay: 0.3, ease: 'easeOut' }"
    :viewport="{ once: true, amount: 0.5 }"
    class="max-w-3xl mx-auto px-4 py-12"
  >
    <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">The Story Behind Tributee</h2>
    <p class="text-lg text-gray-700 dark:text-gray-200 italic font-serif text-center">Tributee was born from a place of love and remembrance after losing someone dear. We wanted a gentle, lasting way to honor their memory and help others do the same—creating a space where stories, photos, and messages can live on and bring comfort to families everywhere.</p>
  </motion.div>

  <!-- Get Started / CTA Section -->
  <motion.div
    tag="section"
    :initial="{ opacity: 0, y: 40 }"
    :whileInView="{ opacity: 1, y: 0 }"
    :transition="{ duration: 0.7, delay: 0.4, ease: 'easeOut' }"
    :viewport="{ once: true, amount: 0.5 }"
    class="max-w-2xl mx-auto px-4 py-12 mb-12"
  >
    <div class="rounded-2xl bg-amber-50 dark:bg-gray-800 border border-amber-100 dark:border-gray-700 shadow p-8 flex flex-col items-center text-center">
      <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Ready to honor a loved one?</h3>
      <a href="/create" class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-400 hover:bg-amber-500 text-white font-semibold shadow transition focus:outline-none focus:ring-2 focus:ring-amber-300">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>
        Start Your First Tribute
      </a>
    </div>
  </motion.div>

  <!-- Footer -->
  <footer class="w-full text-center py-6 mt-8 text-gray-400 text-sm border-t border-gray-800/40 dark:border-gray-200/10 bg-transparent">
    &copy; {{ new Date().getFullYear() }} CodexCreativa. All rights reserved.
  </footer>
</template>

<script setup>
import { motion } from 'motion-v'
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
