<script setup lang="ts">
import { onMounted, ref } from 'vue'

import MenuButton from '@/components/Menu/MenuButton.vue'
import MenuCopyright from '@/components/Menu/MenuCopyright.vue'

const active = ref<boolean>(false)
const menu = ref<HTMLElement>()

const openMenu = () => {
  active.value = true
}
const closeMenu = () => {
  active.value = false
}

const handleKeyboard = (event: KeyboardEvent) => {
  switch (event.key) {
    case 'Escape':
      closeMenu()
      break
    case 'm':
    case 'ь':
      openMenu()
  }
}
const handleOutsideClick = (event: MouseEvent) => {
  const target = event.target as HTMLElement

  if (!menu.value?.contains(target) && !['A', 'BUTTON'].includes(target.tagName)) {
    closeMenu()
  }
}

const toggleMenu = () => {
  if (!active.value) {
    openMenu()
  } else {
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
  background: var(--vt-c-text-dark-2);
  height: 100%;
  left: 0;
  max-width: 480px;
  position: absolute;
  top: 0;
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;
  width: calc(100% - 30px - 2rem); /* 30px button + 2*1rem inline padding */

  --menu-button-color: var(--vt-c-black-soft);
  --menu-button-size: 30px;
}
.menu.active {
  transform: translateX(0);
}

.menu__button {
  left: calc(100% + 1rem); /* 1rem inline padding */
  position: absolute;
  top: 0.5rem;
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
    background: var(--vt-c-text-light-2);

    --menu-button-color: var(--vt-c-white-soft);
  }
}
</style>
