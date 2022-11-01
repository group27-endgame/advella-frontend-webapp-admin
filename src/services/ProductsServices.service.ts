import axios from "axios";
import { backendUrl } from "../links";

export default class ProductsServicesService{
    public async getTotalSpending(token: string, startDate: number = 0, endDate: number = Date.now()): Promise<number> {
        const response = await axios.get(`${backendUrl}/api/productsAndServices/dash-board/closed/${startDate}/${endDate}`, {headers: { Authorization: `Bearer ${token}` } });

        return response.data;
    }
}