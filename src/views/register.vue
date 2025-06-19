<template>
<div class="container">
    <div class="box">
        <div class="title">注册</div>
        <div class="from_action">
            <input placeholder="请输入账号" v-model="username" >
        </div>
         <div class="from_action">
            <input placeholder="请输入密码" v-model="password" type="password">
        </div>
        <div class="from_action">
            <input placeholder="请再次输入密码确认" v-model="confirmPassword" type="password">
        </div>
        <div class="login_to_home">
            <button @click="handleRegister">提交</button>
        </div>
        <div class="Login">
            已有账号？<a @click="ToLogin" class="to_login">去登录吧</a>
        </div>
    </div>
</div>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "@/stores/user";
import { useRouter } from "vue-router";

const username = ref("");
const password = ref("");
const confirmPassword = ref("");
const router = useRouter()
const useStore = useUserStore();

const handleRegister = () => {

    if(!username.value || !password.value) {
        alert("用户名和密码不能为空！")
        return;
    }

    if(password.value !== confirmPassword.value) {
        alert("两次密码不一致！")
        return;
    }

    const success = useStore.register({ username: username.value, password: password.value});
    if(success) {
        router.push("/");
    }
}

const ToLogin = () => {
    router.push("/");
}


</script>

<style>

</style>