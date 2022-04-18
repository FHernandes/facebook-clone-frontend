import Axios, { AxiosResponse } from 'axios';

export interface IPost {
    userId: string;
    description: string;
    image?: string;
}

interface ApiHandler {
    get<T>(url: string): Promise<AxiosResponse<T>>;
    post<T, U>(url: string, payload: T): Promise<AxiosResponse<U>>;
    delete<T>(url: string): Promise<AxiosResponse<T>>;
}

const client = Axios.create({
    baseURL: process.env.REACT_APP_API,
});

const api: ApiHandler = {
    get: async url => {
        console.log(process.env.REACT_APP_API);
        return client.get(url);
    },
    post: async (url, payload) => {
        return client.post(url, payload)
    },
    delete: async url => {
        return client.delete(url);
    }
}

export default api;
