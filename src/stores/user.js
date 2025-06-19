import { ref, computed } from 'vue';
import { defineStore } from "pinia";

export const useUserStore = defineStore('user', () => {

    // state: 相当于data，用于存放数据

    const userList = ref([]);                    // 保存所有的用户
    const currentUser = ref(null);             // 当前登录的账户，默认值
    const isLoggedIn = ref(false);             // 是否已经登录了，默认值


    // 放置函数，用于操作 state

    // 注册逻辑
    const register = (userInfo) => {
        const { username, password } = userInfo;

        // 检查用户是否已经存在
        const existingUser = userList.value.find(user => user.username === username);
        if (existingUser) {
            alert("用户已经存在了")
            return false;
        }

        // 添加新的用户
        userList.value.push({ username, password });
        alert("注册成功！")
        return true;

    };

    // 登录逻辑
    const login = (userInfo) => {
        const { username, password } = userInfo;

       
        // 检查用户和密码是否正确
        const user = userList.value.find(user => user.username === username && user.password === password)
        if (user) {
            currentUser.value = user;
            isLoggedIn.value = true;
            return true;
        } else {
            alert("用户或密码不正确，请你再输入一次！")
            return false;
        }
    };

    // 退出登录的逻辑
    const logout = () => {
        currentUser.value = null;
        isLoggedIn.value = false;
    };

    return {
        userList,
        currentUser,
        isLoggedIn,
        register,
        login,
        logout
    };

});
