import api from "./config";

let apiPrefix = "/badaso-api";

export const createCourseMaterial = async (payload) => {
  const apiUrl = `${apiPrefix}/module/lms/v1/lesson-material/`;

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

  return {data, error, errorMessage};
};

export const getCourseMaterialById = async (materialId) => {
  const apiUrl = `${apiPrefix}/module/lms/v1/lesson-material/${materialId}`;

  let [data, error, errorMessage] = [null, null, null];
  try {
    const response = await api.get(apiUrl);

    if (!!response.errors) {
      throw response.errors;
    }

    data = response.data;
  } catch (e) {
    error = e;
    errorMessage = "Something went wrong, please try again later";
  }

  return {data, error, errorMessage};
};
