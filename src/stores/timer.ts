import { ref } from 'vue'
import { defineStore } from 'pinia'

import { get, set } from '@/service/storage'
import type { State } from '@/api/State.ts'

const STATE_STORAGE_KEY = 'timer_state'

export const useTimerStore = defineStore('timer', () => {
  const state = ref<State>({
    active: false,
  })

  const loadState = () => {
    const savedState = get(STATE_STORAGE_KEY)

    if (savedState) {
      state.value = savedState as State
    }
  }
  const saveState = () => {
    set(STATE_STORAGE_KEY, state.value as object)
  }
  const updateState = <Key extends keyof State>(key: Key, value: State[Key]) => {
    state.value[key] = value

    saveState()
  }

  return { state, loadState, updateState }
})
