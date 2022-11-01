import { ProductModel } from "./Product.model";

export interface ProductCategoryModel {
    productCategoryId?: number;
    title: string;
    products?: ProductModel[];
}