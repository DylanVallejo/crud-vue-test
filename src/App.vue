<template>
  <!-- <div class="p-14 ">
    <h1>enlaces</h1>
    <router-link to="/" class=" justify-center text-4xl text-yellow-300">Login</router-link>
    <router-link to="/home" class=" ml-10 justify-center text-4xl text-blue-300">Home</router-link>
  </div> -->
  <suspense class="container-fluid">
    <router-view />
  </suspense>
  
</template>

<script setup>
  // import LoginForm from './components/LoginForm.vue';



</script>

<style>

</style>
