<!-- frontend/src/views/SignupPage.vue -->

<template>
    <div class="signup">
      <h2>Signup</h2>
      <form>
        <input type="text" placeholder="Username">
        <input type="email" placeholder="Email">
        <input type="password" placeholder="Password">
        <button type="submit" class="btn">Signup</button>
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
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .btn:hover {
    background-color: #218838;
  }
  
  a {
    display: block;
    margin-top: 20px;
    text-align: center;
  }
  </style>
  