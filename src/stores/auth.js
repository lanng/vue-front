import {defineStore} from "pinia";
import api from "@/services/api";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        authUser: null,
        authErrors: [],
        authStatus: null,
    }),
    getters: {
        user: (state) => state.authUser,
        errors: (state) => state.authErrors,
        status: (state) => state.authStatus,
    },
    actions: {
        async getToken() {
            await api.get("/sanctum/csrf-cookie");
        },
        async getUser() {
            this.authErrors = [];
            await this.getToken();
            try {
                const data = await api.get("/api/user");
                this.authUser = data.data;
            } catch (error) {
                this.authErrors = error.response.data;
            }

        },
        async loginHandler(data) {
            this.authErrors = [];
            await this.getToken();
            try {
                await api.post('/login', {
                    email: data.email,
                    password: data.password
                });
                this.router.push("/");
            } catch (error) {
                if (error.response.status === 422) {
                    this.authErrors = error.response.data.errors;
                }
            }

        },
        async registerHandler(data) {
            this.authErrors.clear
            await this.getToken();

            try {
                await api.post("/register", {
                    name: data.name,
                    email: data.email,
                    password: data.password,
                    password_confirmation: data.password_confirmation,
                });
                this.router.push("/");
            } catch (error) {
                if (error.response.status === 422) {
                    this.authErrors = error.response.data.errors;
                }
            }

        },
        async logoutHandler() {
            await api.post('/logout');
            this.authUser = null;
        },
        async forgotPasswordHandler(email) {
            this.authErrors = [];
            try {
                const response = await api.post('/forgot-password', {
                    email: email,
                });
                this.authStatus = response.data.status;
            } catch (error) {
                if (error.response.status === 422) {
                    this.authErrors = error.response.data.errors;
                }
            }
        },
        async resetPasswordHandler(resetData){
            this.authErrors = [];
            await this.getToken();
            try {
                await api.post('/reset-password', resetData);
                this.router.push('/login');
            }catch (error){
                if (error.response.status === 422){
                    this.authErrors = error.response.data.errors;
                }
            }
        }
    },
})