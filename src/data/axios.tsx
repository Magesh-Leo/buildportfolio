import axios from 'axios';
import TokenService from '../shared/token.service';
import { CustomAxiosRequestConfig } from './utils/custom-axios-request-config';


const instance = axios.create({
    baseUrl: 'https://625d371895cd5855d61d3b1e.mockapi.io/',
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials : true,
    passAuthToken: true,
} as CustomAxiosRequestConfig);

instance.interceptors.request.use(
    (config:CustomAxiosRequestConfig) => {
        if (config.passAuthToken === false) return config;

        const token = TokenService.getLocalAccessToken();
        if (token) {
            if (config.headers) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }
        return config
    },
    (error) => {
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    (res) => {
        return res;
    },
    async (err)=>{
        console.log(err, '💀🔴'),
        console.log(err.url, '💀🔴🔧')
        const originalConfig = err?.config;

        if (originalConfig?.url !== '/identity/users/sign-in' && err.response) {
            if (err.response.status === 401 && !originalConfig._retry){
                originalConfig._retry = true;
                try {
                    const rs = await instance.post('identity/users/refresh',{
                        accessToken: TokenService.getLocalAccessToken(),
                        refreshToken: TokenService.getLocalRefreshToken(),  
                    });
                    
                    const {accessToken,refreshToken} = rs.data;
                    TokenService.updateLocalAccessToken(accessToken);
                    TokenService.updateLocalRefreshToken(refreshToken);

                    return await instance(originalConfig);
                } catch (_error) {
                    return Promise.reject(_error);
                }
            }
        }
        return Promise.reject(err);
    }
);

export default instance;