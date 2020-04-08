import {AxiosRequestConfig} from "axios";

export default class RequestHelper {
    static getRequestConfig(url: string, city: string): AxiosRequestConfig {
        let config = {
            method: 'GET',
            baseURL: process.env.API_URL,
            url,
            params: {
                units: 'metric',
                q: city,
                APPID: process.env.API_KEY,
                cnt: 8,
                lang: 'fr'
            }
        };
        // @ts-ignore
        return config;
    }
}