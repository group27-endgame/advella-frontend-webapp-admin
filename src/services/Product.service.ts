import axios from "axios";
import { backendUrl } from "../links";
import { ProductModel } from "../models/Product.model";

export default class ProductService {
    public async getTotalCount(token: string, startDate: number = 0, endDate: number = Date.now()): Promise<number> {
        const response = await axios.get(`${backendUrl}/api/products/dash-board/${startDate}/${endDate}`, {headers: { Authorization: `Bearer ${token}` } });

        return response.data
    }

    public async getLatestProducts(token: string, amount: number = 5): Promise<ProductModel[]>{
        const response = await axios.get(`${backendUrl}/api/products/dash-board/latest?amount=${amount}`, {headers: { Authorization: `Bearer ${token}` } });

        return response.data as ProductModel[];
    }
}