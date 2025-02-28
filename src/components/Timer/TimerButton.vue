<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'

const props = defineProps<{
  active: boolean
}>()

const emit = defineEmits(['click'])

const playAnimation = ref<SVGAnimationElement>()
const pauseAnimation = ref<SVGAnimationElement>()

const handleKeyboard = (event: KeyboardEvent) => {
  switch (event.key) {
    case ' ':
      emit('click')
      break
  }
}

watch(
  () => props.active,
  (active) => {
    if (active) {
      pauseAnimation.value?.beginElement()
    } else {
      playAnimation.value?.beginElement()
    }
  },
  { immediate: true },
)

onMounted(() => {
  window.addEventListener('keydown', handleKeyboard)
})
</script>

<template>
  <button
    class="timer-button"
    :title="active ? 'Pause (Space)' : 'Play (Space)'"
    @click="emit('click')"
  >
    <svg
      class="timer-button__icon"
      viewBox="0 0 40 40"
      stroke-width="4"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="M6 6 L20 13 L20 27 L6 34 z M20 13 L34 20 L34 20 L20 27 z">
        <animate
          attributeName="d"
          to="M6 6 L14 6 L14 34 L6 34 z M26 6 L34 6 L34 34 L26 34 z"
          begin="-1"
          dur="0.3s"
          fill="freeze"
          ref="pauseAnimation"
        />
        <animate
          attributeName="d"
          to="M6 6 L20 13 L20 27 L6 34 z M20 13 L34 20 L34 20 L20 27 z"
          begin="-1"
          dur="0.3s"
          fill="freeze"
          ref="playAnimation"
        />
      </path>
    </svg>
  </button>
</template>

<style scoped>
.timer-button {
  background-color: #e60000;
  border: none;
  border-radius: 50%;
  box-shadow:
    0 0 0 10px var(--color-background),
    0 0 0 12px var(--color-border);
  cursor: pointer;
  height: var(--button-size);
  outline: none;
  padding: 0;
  width: var(--button-size);

  -webkit-tap-highlight-color: transparent;
}
.timer-button__icon {
  fill: var(--vt-c-white-soft);
  height: 50%;
  stroke: var(--vt-c-white-soft);
  width: 50%;
}

@media (prefers-color-scheme: dark) {
  .timer-button {
    background-color: var(--vt-c-black-mute);
  }
}
</style>
