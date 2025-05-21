<template>
  <div class="divMotherHeader">
    <div><h1>My_Market</h1></div>
    <buttonDefault buttonText="Produtos" />
  </div>
</template>

<script setup>
import buttonDefault from './buttonDefault.vue'
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
