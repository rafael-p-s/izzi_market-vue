<template>
  <div>
    <tableDefault v-if="props.produtos && props.produtos.length > 0" :produtos="props.produtos" />
  </div>
</template>

<script setup>
import tableDefault from './tableDefault.vue'

const props = defineProps(['produtos'])
console.log('Produtos no bodyApp:', props.produtos)
</script>

<style lang="scss" scoped></style>
