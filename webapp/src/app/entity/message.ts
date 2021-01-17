import { User } from "./user";

export class Apercu {
    id: number;
    name: string;
    email: string;
    content: string;
}

export class Message {
    id: number;
    content: string;
    sendTime: string;
    sender: User;
    receiver: User;
}