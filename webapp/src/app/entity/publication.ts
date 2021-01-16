import { User } from "./user";

export class Reaction {
    idReaction: number;
    name: string;
    email: string;
    content: string;
}

export class Publication {
    idPublication: number;
    topic: string;
    creationTime: Date;
    creator: User;
}