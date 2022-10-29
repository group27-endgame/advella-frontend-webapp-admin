import axios from "axios";
import { backendUrl } from "../links";

export default class ServiceService {
    public async getTotalCount(token: string): Promise<number> {
        const response = await axios.get(`${backendUrl}/api/services/count`, {headers: { Authorization: `Bearer ${token}` } });

        return response.data
    }
}