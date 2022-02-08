<script lang="ts" setup>
import { onMounted } from 'vue';
import { bootstrap } from '@/config/apps.config';

onMounted(() => {
  bootstrap();
});
</script>
<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
      |
      <router-link to="/app1">子应用1</router-link>
      |
      <router-link to="/app2">子应用2</router-link>
      |
      <router-link to="/app3">子应用3</router-link>
    </nav>
    <router-view />
    <div id="subapp-viewport" />
  </div>
</template>

<style>
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
