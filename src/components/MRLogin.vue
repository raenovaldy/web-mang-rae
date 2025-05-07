<script setup>
import { ref } from 'vue';

    const username = ref('');
    const password = ref('');

    function handleLogin() {
        console.info('Login attempt:', { username: username.value, password: password.value });
    }
</script>

<template>
    <div class="jumbotron">
        <h1>WebKami Login</h1>
        <div class="card">
            <form @submit.prevent="handleLogin">
                <div>
                    <label for="username">Username:</label>
                    <input id="username" v-model="username" type="text" />
                </div>
                <div>
                    <label for="password">Password:</label>
                    <input id="password" v-model="password" type="password" />
                </div>
                <div>
                    <a href="register.html">Register</a> |
                    <a href="forgot-password.html">Forgot Password?</a>
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    </div>
</template>

<style scoped>
    .jumbotron {
        background-image: url('src/assets/picalpicul.png');
        background-size:auto 100%;
        background-position: center;
        background-blend-mode: luminosity;
        color: #ffffff;
        padding: 75px 150px;
        text-align: center;
        border-radius: 10px;
        text-shadow: #333 0px 0px 20px, #333 0px 0px 30px, #333 0px 0px 40px, #333 0px 0px 50px, #333 0px 0px 60px, #333 0px 0px 70px, #333 0px 0px 80px;
    }
    .card {
        background-color: #0a0a0a89;
        padding: 20px;
        border-radius: 8px;
        max-width: 300px;
        margin: auto;
    }
    .card h2 {
        text-align: center;
        margin-bottom: 20px;
    }
    .card form {
        display: flex;
        flex-direction: column;
    }
    .card form div {
        margin-bottom: 15px;
    }
    .card form label {
        margin-bottom: 5px;
        color: #ffffff;
    }
    .card form input {
        padding: 10px;
        border-radius: 4px;
        border: 1px solid #ccc;
    }
</style>