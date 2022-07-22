import { ActionCheckSaveModel, ActionLibraryModel } from "../redux/library/models";
import AXIOS from "./axiosClient";

export const getLibrary = async (token: string) => {
  try {
    return await AXIOS.get(`user/library/list`, {
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    });
  } catch (error) {
    return error;
  }
};

export const saveToLibrary = async (data: ActionLibraryModel) => {
  try {
    const res = await AXIOS.get(`user/library/save/${data._id}`, {
      headers: {
        "Authorization": `Bearer ${data.token}`,
      },
    });
    return res
  } catch (error) {
    return error;
  }
};

export const unsaveToLibrary = async (data: ActionLibraryModel) => {
  try {
    return await AXIOS.get(`user/library/unsave/${data._id}`, {
      headers: {
        "Authorization": `Bearer ${data.token}`,
      },
    });
  } catch (error) {
    return error;
  }
};

export const checkSave = async (data: ActionCheckSaveModel) => {
  try {
    return await AXIOS.get(`user/library/check/${data._id}`, {
      headers: {
        "Authorization": `Bearer ${data.token}`,
      },
    });
  } catch (error) {
    return error;
  }
};
