import api, { apiPrefix } from "../config";

export const createCourseMaterial = async (payload) => {
  const apiUrl = `${apiPrefix}/module/lms/v1/lesson-material`;

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

export const uploadFile = async (payload) => {
  const apiUrl = `${apiPrefix}/module/lms/v1/file/upload`;

  let [data, error, errorMessage] = [null, null, null];
  const formData = new FormData();
  formData.append("file", payload);

  try {
    const response = await api.post(apiUrl, formData);

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
