<script setup lang="ts">
import { onMounted, ref } from 'vue'

import MenuButton from '@/components/Menu/MenuButton.vue'
import MenuCopyright from '@/components/Menu/MenuCopyright.vue'

const active = ref<boolean>(false)
const menu = ref<HTMLElement>()

function isInsideInteractiveElement(element: HTMLElement): boolean {
  const parent = element.parentElement as HTMLElement

  if (element.tagName === 'BODY') return false

  if (['A', 'BUTTON'].includes(element.tagName)) return true

  return isInsideInteractiveElement(parent)
}

const openMenu = () => {
  active.value = true
}
const closeMenu = () => {
  active.value = false
}

const toggleMenu = () => {
  if (!active.value) {
    openMenu()
  } else {
    closeMenu()
  }
}

const handleKeyboard = (event: KeyboardEvent) => {
  switch (event.key) {
    case 'Escape':
      closeMenu()
      break
    case 'm':
    case 'ь':
      toggleMenu()
  }
}
const handleOutsideClick = (event: MouseEvent) => {
  const target = event.target as HTMLElement

  if (!menu.value?.contains(target) && !isInsideInteractiveElement(target)) {
    closeMenu()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyboard)

  document.addEventListener('click', handleOutsideClick)
})
</script>

<template>
  <div class="menu" :class="{ active }" ref="menu">
    <MenuButton class="menu__button" :active="active" @click="toggleMenu" />

    <div class="menu__body">
      <h2 class="menu__title">Settings</h2>

      <div class="menu__content">
        <p>Menu</p>
      </div>

      <MenuCopyright />
    </div>
  </div>
</template>

<style scoped>
.menu {
  background: rgba(235, 235, 235, 0.96);
  height: 100%;
  left: 0;
  max-width: 480px;
  position: absolute;
  top: 0;
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;
  width: 100%;

  --menu-button-color: var(--vt-c-black-soft);
  --menu-button-size: 30px;
}
.menu.active {
  transform: translateX(0);
}

.menu__button {
  right: calc(-1 * (30px + 1rem)); /* 30px button + 1rem inline padding */
  position: absolute;
  top: 0.5rem;
  transition: right 0.3s ease-in-out;
}
.menu.active .menu__button {
  right: 1rem;
}

.menu__body {
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100%;
  transition: visibility 0.3s ease-in-out;
  visibility: hidden;
}
.menu.active .menu__body {
  visibility: visible;
}

.menu__title {
  line-height: 30px;
  padding: 0.5rem;
  text-align: center;
}

.menu__content {
  padding: 0.5rem 1rem;
}

@media (prefers-color-scheme: dark) {
  .menu {
    background: rgba(60, 60, 60, 0.96);

    --menu-button-color: var(--vt-c-white-soft);
  }
}
</style>
