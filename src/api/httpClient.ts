import axios, { AxiosError } from "axios";

const defaultHeaders = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
};

export const httpClient = axios.create({
    headers: defaultHeaders,
});

httpClient.interceptors.response.use(
    (response) => response,
    (error) => {
        return handleError(error);
    },
);
const handleError = async (error: AxiosError) => {
    if (error.response) {
        console.log("ERROR on api", error.response);
    }
};
