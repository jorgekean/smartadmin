import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

// Define a base URL for your API
const baseURL = 'https://myapi/api'; // Replace with your API's base URL

// Create an instance of Axios with default configurations
const api = axios.create({
    baseURL,
});

// Define a type for your API response data
export interface ApiResponse<T = any> {
    data: T;
    status: number;
    statusText: string;
    headers: any;
    config: AxiosRequestConfig;
}

// Define a type for your API error response data
export interface ApiError {
    response: AxiosResponse;
    message: string;
}

// Function to handle GET requests
export async function get<T = any>(
    url: string,
    params?: any
): Promise<ApiResponse<T>> {
    try {
        const response = await api.get<T>(url, { params });
        return {
            data: response.data,
            status: response.status,
            statusText: response.statusText,
            headers: response.headers,
            config: response.config,
        };
    } catch (error) {
        throw handleError(error);
    }
}

// Function to handle POST requests
export async function post<T = any>(
    url: string,
    data?: any
): Promise<ApiResponse<T>> {
    try {
        const response = await api.post<T>(url, data);
        return {
            data: response.data,
            status: response.status,
            statusText: response.statusText,
            headers: response.headers,
            config: response.config,
        };
    } catch (error) {
        throw handleError(error);
    }
}

// Function to handle errors and create a standardized error object
function handleError(error: any): ApiError {
    if (error.response) {
        return {
            response: error.response,
            message: error.response.data.message || error.response.statusText,
        };
    } else if (error.request) {
        return {
            response: error.request,
            message: 'No response received from the server.',
        };
    } else {
        return {
            response: error,
            message: 'An error occurred while making the request.',
        };
    }
}
