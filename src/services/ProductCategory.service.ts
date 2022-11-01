import axios from "axios";
import { backendUrl } from "../links";
import { ProductCategoryModel } from "../models/ProductCategory.model";

export default class ProductCategoryService{
    public async getAllCategories(token: string): Promise<ProductCategoryModel[]>{
        const response = await axios.get(`${backendUrl}/api/product-categories/dash-board/all`, {headers: { Authorization: `Bearer ${token}` } });

        return response.data as ProductCategoryModel[];
    }

    public async deleteCategory(categoryId: number, token: string): Promise<void>{
        const response = await axios.delete(`${backendUrl}/api/product-categories/dash-board/${categoryId}`, {headers: { Authorization: `Bearer ${token}` } });
    }

    public async editCategory(category: ProductCategoryModel, token: string): Promise<void>{
        const response = await axios.put(`${backendUrl}/api/product-categories/dash-board`, category, {headers: { Authorization: `Bearer ${token}` } });
    }

    public async addCategory(category: ProductCategoryModel, token: string): Promise<void>{
        const response = await axios.post(`${backendUrl}/api/product-categories/dash-board`, category, {headers: { Authorization: `Bearer ${token}` } });
    }
}