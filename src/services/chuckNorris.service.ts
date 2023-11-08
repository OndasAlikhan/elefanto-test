import { httpClient } from "@/api/httpClient";
import { AxiosResponse } from "axios";

const PATH = "https://api.chucknorris.io/";

export type JokeResponse = {
    icon_url: string;
    id: string;
    url: string;
    value: string;
};

export default {
    getJoke(): Promise<AxiosResponse<JokeResponse>> {
        return httpClient.get(`${PATH}jokes/random`);
    },
};
