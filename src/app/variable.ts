export class SharedService {
    isSignIn = false;
    isCookieEmpty = true;
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

export class SearchKey {
    constructor(
        public target_name: string,
        public target_type: string,
    ) {}
}
