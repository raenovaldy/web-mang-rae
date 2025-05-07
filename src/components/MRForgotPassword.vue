<script setup>
</script>
<template>
    <div class="jumbotron">
        <h1>WebKami<br>Forgot Password</h1>
        <div class="card">
            <form @submit.prevent="handleForgotPassword">
                <div>
                    <label for="email">Email:</label>
                    <input id="email" v-model="email" type="email" required />
                </div>
                <button type="submit">Send Reset Link</button>
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