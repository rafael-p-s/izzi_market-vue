<template>
  <providerInject>
    <divMotherHeader @produtos-buscados="produtos = $event" />
    <bodyApp :produtos="produtos" />
  </providerInject>
</template>

<script setup>
import { ref, watch } from 'vue'
import divMotherHeader from './components/divMotherHeader.vue'
import providerInject from './components/providerInject.vue'
import bodyApp from './components/bodyApp.vue'

const produtos = ref([])
</script>

<style scoped></style>
