interface User {
    accessToken : string;
    refreshToken: string;
    userDetails: {
        roles:string[];
    };
}

export type { User };