import { http } from "@/http-common";
import TokenService from "@/services/TokenService";
import { authStore } from "@/stores/Auth";

const setup = () => {
    http.interceptors.request.use(
        (config) => {
            config.headers["Content-Type"] = "application/json";
            TokenService.removeToken();

            if (config.url !== '/api/auth/login') {
                const token = TokenService.getLocalAccessToken();

                if (token) {
                    config.headers["Authorization"] = `Bearer ${token}`;
                }
            }

            return config;
        },
        (error) => {
            console.log(error)
            return Promise.reject(error);
        }
    );

    http.interceptors.response.use(
        (res) => {
            return res;
        },
        async (error) => {
            const originalConfig = error.config;

            if (typeof originalConfig !== "undefined" && originalConfig.url !== "/api/auth/login" && error.response) {
                if (error.response.status === 401 && !originalConfig._retry) {
                    await authStore().logout();

                    return http(originalConfig);
                }
            }

            return Promise.reject(error);
        }
    );
};

export default setup;
