import { http } from "@/http-common";

let url = '/api/auth';

class AuthService {
    async login(data) {
        return await http.post(`${url}/login`, data);
    }
    async logout() {
        return await http.post(`${url}/logout`);
    }
    async me() {
        return await http.post(`${url}/me`);
    }
}
export default new AuthService()
