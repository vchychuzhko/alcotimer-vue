<script setup lang="ts"></script>

<template>
  <div class="timer-button-loader" />
</template>

<style scoped>
.timer-button-loader {
  border: 10px solid var(--vt-c-indigo);
  border-radius: 50%;
  opacity: 0.85;

  &::after,
  &::before {
    animation:
      vjs-spinner-spin 1s cubic-bezier(0.6, 0.2, 0, 0.8) infinite,
      vjs-spinner-fade 1s linear infinite;
    border: 10px solid;
    border-color: #ffffff transparent transparent;
    border-radius: inherit;
    content: '';
    height: calc(100% + 20px);
    margin: -10px;
    position: absolute;
    width: calc(100% + 20px);
  }

  &::after {
    animation-delay: 0.5s;
  }
}

@keyframes vjs-spinner-spin {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes vjs-spinner-fade {
  0%,
  100%,
  20%,
  60% {
    border-top-color: #73859f;
  }

  35% {
    border-top-color: #ffffff;
  }
}
</style>
