import { User } from "../shared/user-context/User";

const getLocalRefreshToken = () : User['refreshToken']=>{
    const user: User = JSON.parse(window.localStorage.getItem('user') ?? '{}');
    return user?.refreshToken;
}

const getLocalAccessToken = ():User['accessToken']|null=>{
    const user = window.localStorage.getItem('user') ?? JSON.parse(window.localStorage.getItem('user')?? '{}');
    if (user){
        return JSON.parse(user).accessToken;
    }
    return null
};

const updateLocalAccessToken = (token: string): void=>{
    const user = JSON.parse(window.localStorage.getItem('user') ?? '{}');
    user.acceesToken = token;
    window.localStorage.setItem('user',JSON.stringify(user));
};

const updateLocalRefreshToken = (token:string): void => {
    const user = JSON.parse(window.localStorage.getItem('user') ?? '{}');
    user.refreshToken = token;
    window.localStorage.setItem('user',JSON.stringify(user));
}

const getUser = () : User | {} =>{
    if (typeof window !== 'undefined'){
        console.log(JSON.parse(window.localStorage.getItem('user') ?? '{}'));
        return JSON.parse(window.localStorage.getItem('user') ?? '{}');
    }
    return {};
};
const setUser = (user : User): void => {
    window.localStorage.setItem('user',JSON.stringify(user));
};
const removeUser = () : void => {
    if (typeof window !== 'undefined'){
        window.localStorage.removeItem('user');
    }
};

const TokenService = {
    getLocalAccessToken,
    getLocalRefreshToken,
    updateLocalAccessToken,
    updateLocalRefreshToken,
    getUser,
    setUser,
    removeUser
};

export default TokenService;