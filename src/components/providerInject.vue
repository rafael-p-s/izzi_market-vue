<template>
  <slot />
</template>

<script setup>
import { provide } from 'vue'
import api from '../axios'
import { buscarProdutos } from './buscarProdutos.js'

provide('api', api)
provide('buscarProdutos', buscarProdutos)
</script>

<style lang="scss" scoped></style>
