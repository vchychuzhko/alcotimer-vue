<script setup lang="ts">
defineProps<{
  active: boolean
}>()
</script>

<template>
  <button class="menu-button" :class="{ active }" title="Menu (M)">
    <svg
      class="menu-button__icon"
      viewBox="0 0 80 80"
      fill="none"
      stroke-linecap="round"
      aria-hidden="true"
    >
      <path d="M8 20 h64" />
      <path d="M8 40 h64" />
      <path d="M8 60 h64" />
    </svg>
  </button>
</template>

<style scoped>
.menu-button {
  background: none;
  border: none;
  cursor: pointer;
  height: var(--menu-button-size);
  padding: 0;
  width: var(--menu-button-size);
}

.menu-button__icon {
  height: 100%;
  stroke: var(--menu-button-color);
  stroke-width: 8px;
  width: 100%;
}

.menu-button__icon path:nth-child(1),
.menu-button__icon path:nth-child(3) {
  transition: transform 0.3s ease-in-out;
}
.menu-button.active .menu-button__icon path:nth-child(1) {
  transform: translate(-15%, 38%) rotate(-45deg) scaleX(0.6);
}
.menu-button.active .menu-button__icon path:nth-child(3) {
  transform: translate(55%, -8%) rotate(45deg) scaleX(0.6);
}
</style>
