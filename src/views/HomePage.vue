<template>
    <div class="home">
      <h1>Welcome to School Friend</h1>
      <p>This is a platform where parents can book activities for their children.</p>
      <div class="btn-container">
        <router-link to="/login" class="btn">Login</router-link>
        <router-link to="/signup" class="btn">Signup</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage'
  }
  </script>
  
  <style scoped>
  .home {
    text-align: center;
    margin-top: 50px;
  }
  
  .btn-container {
    margin-top: 30px;
  }
  
  .btn {
    display: inline-block;
    margin: 10px;
    padding: 15px 30px;
    background-color: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 30px;
    transition: background-color 0.3s ease;
  }
  
  .btn:hover {
    background-color: #0056b3;
  }
  </style>
  