import { ChatProductModel } from "./ChatProduct.model";
import { ChatServiceModel } from "./ChatService.model";
import { ContactModel } from "./Contact.model";
import { ProductModel } from "./Product.model";
import { RatingModel } from "./Rating.model";
import { ReportedProductModel } from "./ReportedProduct.model";
import { ReportedServiceModel } from "./ReportedService.model";
import { ServiceModel } from "./Service.model";

export interface UserModel {
    userId: number;
    email: string;
    username: string;
    description: string;
    location: string;
    registrationDateTime: number;
    products: ProductModel[];
    services: ServiceModel[];
    contact: ContactModel[];
    ratings: RatingModel[];
    reportedProducts: ReportedProductModel[];
    reportedServices: ReportedServiceModel[];
    postedService: ServiceModel[];
    postedProduct: ProductModel[];
    bidderChatService: ChatServiceModel[];
    posterChatService: ChatServiceModel[];
    bidderChatProduct: ChatProductModel[];
    posterChatProduct: ChatProductModel[];
    roles: [];
}