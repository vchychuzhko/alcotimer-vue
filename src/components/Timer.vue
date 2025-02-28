<script setup lang="ts">
import TimerButton from '@/components/Timer/TimerButton.vue'

import { useTimerStore } from '@/stores/timer.ts'

const timerStore = useTimerStore()

const toggleTimer = () => {
  timerStore.updateState('active', !timerStore.state.active)
}
</script>

<template>
  <section class="timer">
    <TimerButton :active="timerStore.state.active" @click="toggleTimer" />
  </section>
</template>

<style scoped>
.timer {
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100%;
  padding: 0.5rem 1rem;

  --button-size: 250px;
}

@media (min-width: 1024px) {
}
</style>
