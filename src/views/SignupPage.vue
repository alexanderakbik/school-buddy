<!-- frontend/src/views/SignupPage.vue -->

<template>
    <div class="signup">
      <h2>Signup</h2>
      <form>
        <input type="text" placeholder="Username">
        <input type="email" placeholder="Email">
        <input type="password" placeholder="Password">
        <button type="submit" class="button">Signup</button>
      </form>
      <router-link to="/login">Already have an account? Login</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SignupPage'
  }
  </script>
  
  <style scoped>
  .signup {
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
  