<template>
  <div>
    <button @click="onClick">{{ props.buttonText }}</button>
  </div>
</template>

<script setup>
import { inject } from 'vue'

const props = defineProps(['buttonText'])
const buscarProdutos = inject('buscarProdutos')

let vetor = ref([])

async function onClick() {
  try {
    const response.data = await buscarProdutos();
    vetor.value = response.data; // atualiza o vetor com os dados da API
  } catch (error) {
    if (error.response && error.response.status === 404) {
      alert('Nehum produto encontrado!')
    } else {
      alert('Erro ao buscar produtos!')
    }
  }
}
</script>

<style lang="scss" scoped></style>
