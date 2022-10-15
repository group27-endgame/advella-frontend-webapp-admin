import { UserModel } from "./User.model";

export interface ContactModel {
    contactId: number;
    messageDateTime: Date;
    content: string;
    isSeen: boolean;
    contactUser: UserModel;
}