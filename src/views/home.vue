<template>
<div>this is a home page!</div>
<button @click="logout">点击</button>

</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const logout = () => {
    console.log("退出登录");
    router.push("/")
    
}
</script>

<style>

</style>