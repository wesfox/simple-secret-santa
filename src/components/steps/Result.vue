<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  user: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <p class="bold large">🎁 Offre un cadeau à 🎁</p>
  <p class="bold large reveal">{{ props.user }}</p>
  <p class="bold large">Le budget max est 20€</p>
</template>

<style scoped>
.reveal {
  font-size: min(2rem + 2vw, 5rem);
}
</style>
