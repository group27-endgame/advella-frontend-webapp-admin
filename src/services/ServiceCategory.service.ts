import axios from "axios";
import { backendUrl } from "../links";
import { ServiceCategoryModel } from "../models/ServiceCategory.model";

export default class ServiceCategoryService{
    public async getAllCategories(token: string): Promise<ServiceCategoryModel[]>{
        const response = await axios.get(`${backendUrl}/api/service-categories/all`, {headers: { Authorization: `Bearer ${token}` } });

        return response.data as ServiceCategoryModel[];
    }

    public async deleteCategory(categoryId: number, token: string): Promise<void>{
        const response = await axios.delete(`${backendUrl}/api/service-categories/dash-board/${categoryId}`, {headers: { Authorization: `Bearer ${token}` } });
    }

    public async editCategory(category: ServiceCategoryModel, token: string): Promise<void>{
        const response = await axios.put(`${backendUrl}/api/service-categories/dash-board`, category, {headers: { Authorization: `Bearer ${token}` } });
    }

    public async addCategory(category: ServiceCategoryModel, token: string): Promise<void>{
        const response = await axios.post(`${backendUrl}/api/service-categories/dash-board`, category, {headers: { Authorization: `Bearer ${token}` } });
    }
}