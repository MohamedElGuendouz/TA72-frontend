export class Role {
    id: number;
    name: string;
}

export class User {
    id: number;
    username: string;
    password: string;
    email: string;
    firstname: string;
    lastname: string;
    roles: Role[];
}