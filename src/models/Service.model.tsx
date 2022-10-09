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
    postedDateTime: Date;
    deadline: Date;
    location: string;
    numberOfBids: number;
    numberOfLikes: number;
    serviceStatus: number;
    users: UserModel[];
    serviceCategory: ServiceCategoryModel;
    reportedServices: ReportedServiceModel[];
    posted: UserModel;
    chatServices: ChatServiceModel[];
}