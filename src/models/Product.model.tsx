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
    postedDateTime: Date;
    deadline: Date;
    numberOfBids: number;
    users: UserModel[];
    productCategory: ProductCategoryModel;
    reportedProducts: ReportedProductModel[];
    posted: UserModel;
    chatProducts: ChatProductModel[];
}