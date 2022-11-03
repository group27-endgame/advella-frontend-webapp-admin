import axios from "axios";
import { backendUrl } from "../links";
import { ContactModel } from "../models/Contact.model";

export default class ContactService
{
    public async getAllMessages(token: string): Promise<ContactModel[]>{
        const response = await axios.get(`${backendUrl}/api/contacts`, { headers: { Authorization: `Bearer ${token}` } });

        return response.data as ContactModel[];
    }

    public async setAllMessagesAsRead(token: string): Promise<void>{
        await axios.post(`${backendUrl}/api/contacts/dash-board/seen`, {}, { headers: { Authorization: `Bearer ${token}` } });
    }

    public async removeMessage(messageId: number, token: string): Promise<void>{
        await axios.delete(`${backendUrl}/api/contacts/dash-board/${messageId}`, { headers: { Authorization: `Bearer ${token}` } });
    }

    public async getNumberOfUnreadMessages(token: string): Promise<number>{ 
        const response = await axios.get(`${backendUrl}/api/contacts/dash-board/unseen`, { headers: { Authorization: `Bearer ${token}` } });

        return response.data as number;
    }
}