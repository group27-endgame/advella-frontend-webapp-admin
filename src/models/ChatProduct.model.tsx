import { ProductModel } from "./Product.model";
import { UserModel } from "./User.model";

export interface ChatProductModel {
    chatId: number;
    message: string;
    product: ProductModel;
    userBidder: UserModel;
    userPoster: UserModel;
}