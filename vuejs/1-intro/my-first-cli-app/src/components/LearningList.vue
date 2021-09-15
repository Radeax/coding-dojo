<script setup>
import { ref } from 'vue'

defineProps({
  name: String
})

const count = ref(0)
</script>

<template>
  <h1>{{ name }}'s List of Things to Learn</h1>

  <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>Vue</li>
    <li>Firebase</li>
  </ul>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
