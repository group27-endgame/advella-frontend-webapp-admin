import { ChatProductModel } from "./ChatProduct.model";
import { ProductCategoryModel } from "./ProductCategory.model";
import { ReportedProductModel } from "./ReportedProduct.model";
import { UserModel } from "./User.model";

export interface ProductModel {
    productId: number;
    title: string;
    detail: string;
    moneyAmount: number;
    pickUpLocation: string;
    postedDateTime: number;
    deadline: number;
    numberOfBids: number;
    users: UserModel[];
    productCategory: ProductCategoryModel;
    reportedProducts: ReportedProductModel[];
    posted: UserModel;
    chatProducts: ChatProductModel[];
    productStatus: string;
}