export class SharedService {
    isSignIn = false;
}

export class DetailOfPicture {
    constructor(
        public id: string,
        public url: string,
        public description: string
    ) {}
}

export class UserSignUp {
    constructor(
        public email: string,
        public password: string,
    ) {}
}
