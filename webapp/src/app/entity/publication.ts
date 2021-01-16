import { User } from "./user";

export class Publication {
    idReaction: number;
    name: string;
    email: string;
    content: string;
}

export class Discussion {
    constructor(
        public idDiscusssion:number,
        public topic:string,
        public creationTime:string,
        public creator:User
    ) {
    }
}