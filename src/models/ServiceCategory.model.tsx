import { ServiceModel } from "./Service.model";

export interface ServiceCategoryModel {
    serviceCategoryId: number;
    title: string;
    services: ServiceModel[];
}