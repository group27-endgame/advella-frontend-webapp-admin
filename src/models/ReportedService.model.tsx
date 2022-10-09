import { ServiceModel } from "./Service.model";
import { UserModel } from "./User.model";

export interface ReportedServiceModel {
    reportedServiceId: number;
    reportedDateTime: Date;
    reason: string;
    reportedService: ServiceModel;
    serviceReportUser: UserModel;
}