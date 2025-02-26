<script setup lang="ts">
import Menu from '@/components/Menu.vue'
</script>

<template>
  <header class="header">
    <Menu />
    <img class="header__logo" src="@/assets/logo.svg" alt="AlcoTimer" width="138" height="30" />
  </header>
</template>

<style scoped>
.header {
  border-bottom: 1px solid var(--color-border);
  display: flex;
  justify-content: center;
  padding: 0.5rem;
}

@media (prefers-color-scheme: dark) {
  .header__logo {
    filter: invert(1);
  }
}
</style>
