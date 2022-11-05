import axios from "axios";
import { backendUrl } from "../links";
import { ServiceModel } from "../models/Service.model";

export default class ServiceService {
    public async getTotalCount(token: string): Promise<number> {
        const response = await axios.get(`${backendUrl}/api/services/dash-board/count`, {headers: { Authorization: `Bearer ${token}` } });

        return response.data
    }

    public async getLatestServices(token: string, amount: number = 5): Promise<ServiceModel[]>{
        const response = await axios.get(`${backendUrl}/api/services/latest?amount=${amount}`, {headers: { Authorization: `Bearer ${token}` } });

        return response.data as ServiceModel[];
    }

    public async getAllServices(token: string): Promise<ServiceModel[]>{
        const response = await axios.get(`${backendUrl}/api/services`, {headers: { Authorization: `Bearer ${token}` } });

        return response.data as ServiceModel[];
    }
    
    public async deleteServices(serviceId: number, token: string): Promise<void>{
        await axios.delete(`${backendUrl}/api/services/dash-board/${serviceId}`, {headers: { Authorization: `Bearer ${token}` } });
    }
}