import { User } from "./user";

export class Message {
    id: number;
    content: string;
    sendTime: string;
    sender: User;
    receiver: User;
}