export class Role {
    constructor(
        public id: number,
        public name: string
    ){
    }
}

export class User {
    constructor(
        public id: number,
        public username: string,
        public password: string,
        public email: string,
        public firstName: string,
        public lastname: string,
        public role: Role[]
        ){
        }
}