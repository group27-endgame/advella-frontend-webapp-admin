import axios from "axios";
import { backendUrl } from "../links";
import { ServiceModel } from "../models/Service.model";

export default class ServiceService {
    public async getTotalCount(token: string, startDate: number = 0, endDate: number = Date.now()): Promise<number> {
        const response = await axios.get(`${backendUrl}/api/services/dash-board/${startDate}/${endDate}`, {headers: { Authorization: `Bearer ${token}` } });

        return response.data
    }

    public async getLatestServices(token: string, amount: number = 5): Promise<ServiceModel[]>{
        const response = await axios.get(`${backendUrl}/api/services/dash-board/latest?amount=${amount}`, {headers: { Authorization: `Bearer ${token}` } });

        return response.data as ServiceModel[];
    }
}