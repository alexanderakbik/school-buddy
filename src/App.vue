<template>
  <div id="app">

    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  margin-top: 20px;
}

.nav-link {
  margin: 0 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}

.nav-link:hover {
  background-color: #0056b3;
}
</style>
