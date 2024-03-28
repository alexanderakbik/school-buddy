<!-- frontend/src/views/LoginPage.vue -->

<template>
    <div class="login">
      <h2>Login</h2>
      <form>
        <input type="text" placeholder="Username/Email">
        <input type="password" placeholder="Password">
        <button type="submit" class="btn">Login</button>
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
    max-width: 400px;
    margin: 0 auto;
  }
  
  input {
    display: block;
    width: 100%;
    margin-bottom: 20px;
    padding: 10px;
  }
  
  .btn {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .btn:hover {
    background-color: #0056b3;
  }
  
  a {
    display: block;
    margin-top: 20px;
    text-align: center;
  }
  </style>
  