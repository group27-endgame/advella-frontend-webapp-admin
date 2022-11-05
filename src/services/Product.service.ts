import axios from "axios";
import { backendUrl } from "../links";
import { ProductModel } from "../models/Product.model";

export default class ProductService {
    public async getTotalCount(token: string, startDate: number = 0, endDate: number = Date.now()): Promise<number> {
        const response = await axios.get(`${backendUrl}/api/products/dash-board/${startDate}/${endDate}`, {headers: { Authorization: `Bearer ${token}` } });

        return response.data
    }

    public async getLatestProducts(token: string, amount: number = 5): Promise<ProductModel[]>{
        const response = await axios.get(`${backendUrl}/api/products/latest?amount=${amount}`, {headers: { Authorization: `Bearer ${token}` } });

        return response.data as ProductModel[];
    }

    public async getAllProducts(token: string): Promise<ProductModel[]>{
        const response = await axios.get(`${backendUrl}/api/products`, {headers: { Authorization: `Bearer ${token}` } });

        return response.data as ProductModel[];
    }
    
    public async deleteProducts(productId: number, token: string): Promise<void>{
        await axios.delete(`${backendUrl}/api/products/dash-board/${productId}`, {headers: { Authorization: `Bearer ${token}` } });
    }
}