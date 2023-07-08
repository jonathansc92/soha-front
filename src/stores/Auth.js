import { defineStore } from 'pinia';
import { useToast } from "vue-toastification";
import AuthService from '@/services/AuthService.js';
import TokenService from "@/services/TokenService";

const toastr = useToast();

export const authStore = defineStore("authStore", {
    id: 'authStore',
    state: () => ({}),
    getters: {},
    actions: {
        async login(data) {

            await AuthService.login(data).then(async response => {
                TokenService.setToken(response.data);
                console.log(TokenService.getLocalAccessToken())
                toastr.success(response.data.message);

                this.router.push('/');
            }).catch(async (error) => {
                toastr.error(error.response.data.message);
                this.router.push('/login');
            });
        },
        async logout() {
            TokenService.removeToken();

            toastr.success("Sessão encerrada com sucesso!");

            this.router.push('/login');
        },
    },
})
