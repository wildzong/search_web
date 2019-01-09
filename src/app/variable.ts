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
        public nickname: string,
        public email: string,
        public password: string,
        public mailcode: string,
    ) {}
}

export class SendEmail {
    constructor(
        public nickname: string,
        public email: string,
    ) {}
}

export class UserLogIn {
    constructor(
        public email: string,
        public password: string,
    ) {}
}

