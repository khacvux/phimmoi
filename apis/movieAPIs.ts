import { ActionGetInfMovieModel, ActionGetListMovieByCategoryModel, ActionSearchMovieLikeName } from "../redux/movie/models";
import AXIOS from "./axiosClient";

export const getListCategory = async (token: string) => {
  try {
    return await AXIOS.get(`category/list`, {
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    });
  } catch (error) {
    return error;
  }
};

export const getListMovieByCategory = async (data: ActionGetListMovieByCategoryModel) => {
  try {
    return await AXIOS.get(`movie/category/${data.idCategory}`, {
      headers: {
        "Authorization": `Bearer ${data.token}`,
      },
    });
  } catch (error) {
    return error;
  }
};

export const getInfoMovie = async (data: ActionGetInfMovieModel) => {
  try {
    return await AXIOS.get(`movie/info/${data.idMovie}`, {
      headers: {
        "Authorization": `Bearer ${data.token}`,
      },
    });
  } catch (error) {
    return error;
  }
};

export const searchMovieLikeName = async (data: ActionSearchMovieLikeName) => {
  try {
    return AXIOS.get(`movie/search/${data.keyword}`, {
      headers: {
        "Authorization": `Bearer ${data.token}`,
      },
    });
  } catch (error) {
    return error;
  }
};
