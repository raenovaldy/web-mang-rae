<script setup>
import { reactive } from 'vue';

const form = reactive({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
});

function handleSubmit() {
    if (form.password !== form.confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
    console.log('Form submitted:', form);
}
</script>
<template>
    <div class="jumbotron">
        <h1>WebKami Register</h1>
        <div class="card">
            <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" id="username" v-model="form.username" required />
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" v-model="form.email" required />
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" v-model="form.password" required />
            </div>
            <div class="form-group">
                <label for="confirmPassword">Confirm Password</label>
                <input type="password" id="confirmPassword" v-model="form.confirmPassword" required />
            </div>
            <button type="submit">Register</button>
        </form>
        </div>
    </div>
</template>
<style scoped>
    .jumbotron {
        background-image: url('src/assets/picalpicul.png');
        background-size: auto 100%;
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
</style>