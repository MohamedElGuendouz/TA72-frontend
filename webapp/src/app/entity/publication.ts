import { User } from "./user";

export class Publication {

    constructor(
        public idReaction: number,
        public name: string,
        public email: string,
        public content: string
    ) {}
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