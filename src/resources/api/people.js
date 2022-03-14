import api from "./config";

let apiPrefix = "/badaso-api";

export default {
    async people() {
        let apiUrl = apiPrefix + "/module/lms/v1/course/1/people";
        let response = await api.get(apiUrl);

        if (response.data) {
            let peoples = response.data;
            localStorage.setItem("peoples", peoples);
        }
        return response;
    }
}
