<template>
  <div>
    <table v-if="props.produtos && props.produtos.length > 0">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome Produto</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="produto in props.produtos" :key="produto.id">
          <td>{{ produto.id }}</td>
          <td>{{ produto.nome_produto }}</td>
          <td>{{ produto.preco }}</td>
        </tr>
      </tbody>
    </table>
    <p v-else>Não há produtos para exibir.</p>
  </div>
</template>

<script setup>
const props = defineProps({
  produtos: {
    type: Array,
    required: true,
  },
})
console.log('Produtos recebidos em tableDefault:', props.produtos)
</script>

<style lang="scss" scoped></style>
