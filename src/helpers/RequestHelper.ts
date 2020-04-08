import {AxiosRequestConfig} from "axios";

export default class RequestHelper {
    static getRequestConfig(method: string, url: string, city: string): AxiosRequestConfig {
        let config = {
            method: method,
            baseURL: process.env.API_URL,
            url: url,
            params: {
                units: 'metric',
                q: city,
                APPID: process.env.API_KEY,
                cnt: 8,
                lang: 'fr'
            }
        };
        return config;
    }
}