<script setup lang="ts">
import Header from '@/components/Header.vue'
import Timer from '@/components/Timer.vue'

import { onMounted } from 'vue'
import { useTimerStore } from '@/stores/timer.ts'

const timerStore = useTimerStore()

onMounted(() => {
  timerStore.loadState()
})
</script>

<template>
  <Header />

  <main>
    <Timer />
  </main>
</template>

<style scoped></style>
