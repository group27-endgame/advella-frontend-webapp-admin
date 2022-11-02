import axios from "axios";
import { backendUrl } from "../links";
import { ProductModel } from "../models/Product.model";

export default class ProductService {
    public async getTotalCount(token: string): Promise<number> {
        const response = await axios.get(`${backendUrl}/api/products/dash-board/count`, {headers: { Authorization: `Bearer ${token}` } });

        return response.data
    }

    public async getLatestProducts(token: string, amount: number = 5): Promise<ProductModel[]>{
        const response = await axios.get(`${backendUrl}/api/products/latest?amount=${amount}`, {headers: { Authorization: `Bearer ${token}` } });

        return response.data as ProductModel[];
    }
}