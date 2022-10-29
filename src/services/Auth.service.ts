import axios from "axios";
import { backendUrl } from "../links";

export default class AuthService{
    public async login(username: string, password: string): Promise<string | undefined>{
        let token: string | undefined = undefined;

        const params = new URLSearchParams();
        params.append("username", username);
        params.append("password", password);

        const response = await axios.post(`${backendUrl}/api/users/login`, params);

        if(response.status !== 200)
            return undefined;

        token = response.data.token;

        if(!this.isAdmin(token))
            return undefined;

        return token;
    }

    private isAdmin(token: string | undefined): boolean{
        if(!token)
            return false;

        const payloadBase64 = token.split(".")[1];
        const payload = JSON.parse(atob(payloadBase64));
        const roles: string[] = payload['roles'];

        return roles.includes("admin");
    }
}