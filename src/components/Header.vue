<script setup lang="ts">
import Toolbar from 'primevue/toolbar'
import Menu from '@/components/Menu.vue'
</script>

<template>
  <header>
    <Toolbar class="header">
      <template #start>
        <Menu class="header__menu" />
      </template>

      <template #center>
        <img class="header__logo" src="@/assets/logo.svg" alt="AlcoTimer" width="138" height="30" />
      </template>
    </Toolbar>
  </header>
</template>

<style scoped>
.header {
  border-radius: 0;
  border-width: 0 0 1px;
}

@media (prefers-color-scheme: dark) {
  .header__logo {
    filter: invert(1);
  }
}
</style>
