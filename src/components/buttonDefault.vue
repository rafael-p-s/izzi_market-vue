<template>
  <div>
    <button @click="$emit('click')">{{ buttonText }}</button>
  </div>
</template>

<script setup>
const props = defineProps(['buttonText'])
</script>

<style lang="scss" scoped></style>
