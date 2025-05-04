import { ref } from 'vue'
import { defineStore } from 'pinia'

import { get, set } from '@/service/storage'
import type { State } from '@/api/State.ts'

const STATE_STORAGE_KEY = 'timer_state'

export const useTimerStore = defineStore('timer', () => {
  const state = ref<State>({
    active: false,
    remaining: null,
  })

  const loadState = () => {
    const stateStored = get(STATE_STORAGE_KEY)

    if (stateStored) {
      state.value = stateStored as State
    }
  }
  const saveState = () => {
    set(STATE_STORAGE_KEY, state.value as object)
  }

  const setActive = (active: boolean) => {
    state.value.active = active

    saveState()
  }
  const setRemaining = (remaining: number | null) => {
    state.value.remaining = remaining

    saveState()
  }

  return { state, loadState, setActive, setRemaining }
})
