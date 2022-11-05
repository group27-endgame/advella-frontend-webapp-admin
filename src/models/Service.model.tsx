import { ChatServiceModel } from "./ChatService.model";
import { ReportedServiceModel } from "./ReportedService.model";
import { ServiceCategoryModel } from "./ServiceCategory.model";
import { UserModel } from "./User.model";

export interface ServiceModel {
    serviceId: number;
    title: string;
    detail: string;
    moneyAmount: number;
    duration: number;
    postedDateTime: number;
    deadline: number;
    location: string;
    numberOfBids: number;
    numberOfLikes: number;
    serviceStatus: string;
    users: UserModel[];
    serviceCategory: ServiceCategoryModel;
    reportedServices: ReportedServiceModel[];
    posted: UserModel;
    chatServices: ChatServiceModel[];
}