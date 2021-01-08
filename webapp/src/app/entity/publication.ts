export class Reaction {
    idReaction: number;
    name: string;
    email: string;
    content: string;
}

export class Publication {
    idPublication: number;
    subject: string;
    name: string;
    content: string;
    reactionsList: number;
}