<script setup>

</script>

<template>
  <div class="jumbotron">
    <h1>Welcome to WebKami</h1>
    <p>Your one-stop solution for all your needs.</p>

    <a href="login.html">
      <button>Login</button>
    </a>
    <a href="dashboard.html">
      <button>Dashboard</button>
    </a>
  </div>
</template>

<style scoped>
.jumbotron {
  background-image: url('src/assets/prabonsyah.png');

  background-size: cover;
  background-position: center;
  background-blend-mode: luminosity;
  color: #ffffff;
  padding: 100px 100px;
  text-align: center;
  border-radius: 10px;
  text-shadow: #333 0px 0px 20px, #333 0px 0px 30px, #333 0px 0px 40px, #333 0px 0px 50px, #333 0px 0px 60px, #333 0px 0px 70px, #333 0px 0px 80px;
}

a {
    text-decoration: none;
    color: #ffffff;
    padding: 10px;
} 

p {
  font-size: 20px;
  font-weight: bolder;
}

button {
  background-color: #505050;
  color: #ffffff;
  border: none;
  padding: 15px 30px;
  font-size: 20px;
  cursor: pointer;
  border-radius: 5px;
  margin: 10px;
  transition: background-color 0.3s;  
}
    
</style>
