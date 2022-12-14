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


    public async getAllUsers(token: string): Promise<UserModel[]>{
        const response = await axios.get(`${backendUrl}/api/users/dash-board`, {headers: { Authorization: `Bearer ${token}` } });

        return response.data as UserModel[];
    }

    public async deleteUser(token: string, userId: number): Promise<void>{
        await axios.delete(`${backendUrl}/api/users/dash-board/${userId}`, {headers: { Authorization: `Bearer ${token}` } });
    }

    public async updateUser(token: string, userId: number): Promise<void>{
        await axios.put(`${backendUrl}/api/users/dash-board?userId=${userId}`, {}, {headers: { Authorization: `Bearer ${token}` } });
    }

    public async getUserById(token: string, userId: number): Promise<UserModel>{
        const response = await axios.get(`${backendUrl}/api/users/${userId}`, {headers: { Authorization: `Bearer ${token}` } });

        return response.data as UserModel;
    }
}