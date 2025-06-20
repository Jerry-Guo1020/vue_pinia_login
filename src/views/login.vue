<template>
    <div class="container">
        <div class="box">
            <div class="title">登录</div>
            <div class="from_action">
                <input placeholder="请输入账号" v-model="username" type="text">
            </div>
            <div class="from_action">
                <input placeholder="请输入密码" v-model="password" type="password">
            </div>
            <div class="login_to_home">
                <button @click="handleLogin">提交</button>
            </div>
            <div class="register">

                <!-- 在使用框架的时候，跳转页面的时候使用路由跳转——router.push 通过click事件调用函数来进行页面跳转
             那么在什么时候是使用 href 呢？ 如果是要跳转另一个网站的时候，就可以用这个 -->
                没有账号？<a @click="toRegister" class="to_register">去注册吧</a>
                <!-- 没有账号？<a href="./register.vue">去注册吧</a> -->
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from 'vue-router'
import { useUserStore } from "@/stores/user";

const router = useRouter()
const username = ref("");
const password = ref("");
const useStore = useUserStore();

const handleLogin = () => {

    if (!username.value || !password.value) {
        alert("请输入账户密码！");
        return;
    }


    const success = useStore.login({ username: username.value, password: password.value });
    if (success) {
        router.push("/home");
    }
}


const toRegister = () => {
    console.log("跳转Register");
    router.push('/register')

}
</script>

<style>
.to_register {
    cursor: pointer;

}
</style>