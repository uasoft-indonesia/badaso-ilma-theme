import axios from "axios";
import beforeRequest from "./utils/beforeRequest";
import handleError from "./utils/handleError";

function createResource() {
    const instance = axios.create({
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    });

    instance.interceptors.request.use(
        (config) => {
            //const token = localStorage.getItem("token");
            const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3RcL2FkbWluXC92MVwvYXV0aFwvbG9naW4iLCJpYXQiOjE2NDcxMDMzNDIsImV4cCI6MTY0OTY5NTM0MiwibmJmIjoxNjQ3MTAzMzQyLCJqdGkiOiJxNXRKeENxMTd0REE1aGlEIiwic3ViIjoxLCJwcnYiOiI3NjFkYmE4MDAwOThmNDYzNmVkMGE4NWY5NjNlOTk3MjY1MjhjZmYxIn0.7twAsaH2-INKqCv30wBbcC-tmIeRVO-Vky5K0F1XNFw"
            if (token) config.headers.Authorization = "Bearer " + token;
            beforeRequest(config);

            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    instance.interceptors.response.use(
        (response) => {
            return Promise.resolve(response.data);
        },
        (error) => {
            return handleError(error);
        }
    );

    return instance;
}

export default createResource();

const web = createResource();
web.interceptors.request.use((config) => {
    config.baseURL = process.env.MIX_ADMIN_PANEL_ROUTE_PREFIX;
    return config;
});

export { web };
