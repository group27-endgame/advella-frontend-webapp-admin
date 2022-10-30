import { UserModel } from "./User.model";

export interface ContactModel {
    contactId: number;
    messageDateTime: number;
    content: string;
    isSeen: boolean;
    contactUser: UserModel;
}