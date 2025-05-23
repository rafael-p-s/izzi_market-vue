<template>
  <div class="divMotherHeader">
    <div><h1>My_Market</h1></div>
    <buttonDefault @click="buscarProdutos" buttonText="Produtos" />
  </div>
</template>

<script setup>
import buttonDefault from './buttonDefault.vue'
import { inject } from 'vue'
import { defineEmits } from 'vue'

const Produtos = inject('Produtos')
const emit = defineEmits(['produtos-buscados'])

async function buscarProdutos() {
  const resposta = await Produtos.listar()
  const produtos = resposta.data
  emit('produtos-buscados', produtos)
}
</script>

<style>
.divMotherHeader {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1 solid black;
  background-color: green;
  /* width: 100%; */
}
</style>
