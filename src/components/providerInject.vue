<template>
  <slot />
</template>

<script setup>
import { provide, onMounted } from 'vue'
import api from '../axios'
import Produtos from '@/services/Produtos'

provide('api', api)
provide('Produtos', Produtos)
</script>

<style lang="scss" scoped></style>
