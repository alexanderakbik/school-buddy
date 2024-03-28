<template>
  <div id="app">
    <router-link to="/" class="nav-link">Home</router-link>
    <router-link to="/login" class="nav-link">Login</router-link>
    <router-link to="/signup" class="nav-link">Signup</router-link>
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
