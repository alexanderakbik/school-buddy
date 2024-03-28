<!-- frontend/src/views/LoginPage.vue -->

<template>
    <div class="login">
      <h2>Login</h2>
      <form>
        <input type="text" placeholder="Username/Email">
        <input type="password" placeholder="Password">
        <button type="submit" class="button">Login</button>
      </form>
      <router-link to="/signup">Don't have an account? Signup</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginPage'
  }
  </script>
  
  <style scoped>
  .login {
    max-inline-size: 400px;
    margin: 0 auto;
  }
  
  input {
    display: block;
    inline-size: 100%;
    margin-block-end: 20px;
    padding: 10px;
  }
  
  a {
    display: block;
    margin-block-start: 20px;
    text-align: center;
  }
  </style>
  