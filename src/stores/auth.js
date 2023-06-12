import {defineStore} from "pinia";
import api from "@/services/api";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        authUser: null
    }),
    getters: {
        user: (state) => state.authUser
    },
    actions: {
        async getToken() {
            await api.get("/sanctum/csrf-cookie");
        },
        async getUser() {
            await this.getToken();
            const data = await api.get("/api/user");
            this.authUser = data.data;
        },
        async loginHandler(data) {
            await this.getToken();
            await api.post('/login', {
                email: data.email,
                password: data.password
            });
            this.router.push("/");
        },
        async registerHandler(data) {
            await this.getToken();
            await api.post("/register", {
                name: data.name,
                email: data.email,
                password: data.password,
                password_confirmation: data.password_confirmation,
            });
            this.router.push("/");
        },
        async logoutHandler() {
            await api.post('/logout');
            this.authUser = null;
        },
        async forgotPasswordHandler(email){
            await api.post('/forgot-password', {
                email: email,
            })
        }

    },

})