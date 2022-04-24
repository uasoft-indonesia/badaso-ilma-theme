import api, { apiPrefix } from "../config";

export const createMaterialComment = async (payload) => {
    const apiUrl = `${apiPrefix}/module/lms/v1/material-comment`;

    let [data, error, errorMessage] = [null, null, null];
    try {
        const response = await api.post(apiUrl, payload);

        if (!!response.errors) {
            throw response.errors;
        }

        data = response.data;
    } catch (e) {
        error = e;
        errorMessage = "Something went wrong, please try again later";
    }

    return { data, error, errorMessage };
};
