import { ref, computed } from 'vue';
import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {

    // state: 相当于data，用于存放数据
    state: () => ({
        userList: [],                   // 保存所有的用户
        currentUser: null,             // 当前登录的账户，默认值
        isLoggedIn: false             // 是否已经登录了，默认值
    }),

        // 放置函数，用于操作 state
        actions: {
        // 注册逻辑
        register (userInfo) {
            const { username, password } = userInfo;

            // 检查用户是否已经存在
            const existingUser = this.userList.find(user => user.username === username);
            if (existingUser) {
                alert("用户已经存在了")
                return false;
            }

            // 添加新的用户
            this.userList.push({ username, password });
            alert("注册成功！")
            return true;

        },

        // 登录逻辑
        login (userInfo) {
            const { username, password } = userInfo;


            // 检查用户和密码是否正确
            const user = this.userList.find(user => user.username === username && user.password === password)
            if (user) {
                this.currentUser = user;
                this.isLoggedIn= true;
                return true;
            } else {
                alert("用户或密码不正确，请你再输入一次！")
                return false;
            }
        },

        // 退出登录的逻辑
        logout () {
            this.currentUser = null;
            this.isLoggedIn= false;
        }

    }

});
