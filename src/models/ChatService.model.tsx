import { ServiceModel } from "./Service.model";
import { UserModel } from "./User.model";

export interface ChatServiceModel {
    chatId: number;
    message: string;
    service: ServiceModel;
    userBidder: UserModel;
    userPoster: UserModel;
}