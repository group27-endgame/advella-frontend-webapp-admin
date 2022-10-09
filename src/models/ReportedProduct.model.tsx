import { ProductModel } from "./Product.model";
import { UserModel } from "./User.model";

export interface ReportedProductModel {
    reportedProductId: number;
    reportedDateTime: Date;
    reason: string;
    reportedProduct: ProductModel;
    productReportUser: UserModel;
}