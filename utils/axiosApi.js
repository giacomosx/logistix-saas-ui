import axios from 'axios';

class AxiosApi {
    constructor() {
        const baseUrl = process.env.NEXT_PUBLIC_BASE_SERVER_URL;
        this.axiosInstance = axios.create({
            baseURL: baseUrl,
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true,
        })
        this.axiosInstance.interceptors.request.use(async (config) => {
           //default custom config

            return config;
        }, (error) => {
            return Promise.reject(error);
        })
    }

    async get(url, config = {}) {
        try {
            const response = await this.axiosInstance.get(url, {
                ...config,
                headers: {
                    ...this.axiosInstance.defaults.headers,
                    ...config.headers
                }
            });
            return response.data;
        } catch (e) {
            return Promise.reject(e.message);
        }
    }

    async post(url, body, config = {}) {
        try {
            const response = await this.axiosInstance.post(url, body, {
                ...config,
                headers: {
                    ...this.axiosInstance.defaults.headers,
                    ...config.headers
                }
            });
            return response.data;
        } catch (e) {
            return Promise.reject(e.response.data);
        }

    }

    async patch(url, body, config = {}) {
        try {
            const response = await this.axiosInstance.patch(url, body, {
                ...config,
                headers: {
                    ...this.axiosInstance.defaults.headers,
                    ...config.headers
                }
            });
            return response.data;
        } catch (e) {
            return Promise.reject(e.response.data);
        }
    }

    async delete(url, config = {}) {
        try {
            const response = await this.axiosInstance.delete(url, {
                ...config,
                headers: {
                    ...this.axiosInstance.defaults.headers,
                    ...config.headers
                }
            });
            return response.data;
        } catch (e) {
            return Promise.reject(e.response.data);
        }
    }
}

export default AxiosApi;