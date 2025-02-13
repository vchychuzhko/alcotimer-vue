<script setup lang="ts"></script>

<template>
  <header>
    <img src="@/assets/logo.svg" alt="AlcoTimer" width="138" height="30" />
  </header>
</template>

<style scoped>
header {
  border-bottom: 1px solid var(--color-border);
  display: flex;
  justify-content: center;
  padding: 0.5rem;
}

@media (prefers-color-scheme: dark) {
  img {
    filter: invert(1);
  }
}
</style>
