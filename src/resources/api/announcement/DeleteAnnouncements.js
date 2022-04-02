import api from "../config";

let apiPrefix = "/badaso-api";

export const DeleteAnnouncement = async (id) => {
  const apiUrl = `${apiPrefix}/module/lms/v1/announcement/${id}`;

  let [data, error, errorMessage] = [null, null, null];
  try {
    const response = await api.delete(apiUrl);

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
