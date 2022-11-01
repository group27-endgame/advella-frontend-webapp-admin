import axios from "axios";
import { backendUrl } from "../links";
import { UserModel } from "../models/User.model";

export default class UserService{
    public async getTotalCount(token: string, startDate: number = 0, endDate: number = Date.now()): Promise<number> {
        const response = await axios.get(`${backendUrl}/api/users/dash-board/registered/${startDate}/${endDate}`, {headers: { Authorization: `Bearer ${token}` } });

        return response.data;
    }

    public async getLatestUsers(token: string, amount: number = 5): Promise<UserModel[]>{
        const response = await axios.get(`${backendUrl}/api/users/dash-board/latest?amount=${amount}`, {headers: { Authorization: `Bearer ${token}` } });

        return response.data as UserModel[];
    }
}