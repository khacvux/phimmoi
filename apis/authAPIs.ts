import AXIOS from "./axiosClient";
import {
  LoginModel,
  SignupModel,
  ActionChangePassModel,
  ActionChangeNameModel,
  ActionSetAvatarModel,
} from "../redux/auth/models";

export const login = async (data: LoginModel) => {
  try {
    return await AXIOS.post(`user/login`, data);
  } catch (error) {
    return error;
  }
};

export const signup = async (data: SignupModel) => {
  try {
    return await AXIOS.post(`user/register`, data);
  } catch (error) {
    return error;
  }
};

export const changePassword = async (data: ActionChangePassModel) => {
  try {
    return await AXIOS.post(
      `user/password/change`,
      { password: data.password, newPassword: data.newPassword },
      {
        headers: {
          "Authorization": `Bearer ${data.token}`,
        },
      }
    );
  } catch (error) {
    return error;
  }
};

export const changeName = async (data: ActionChangeNameModel) => {
  try {
    return await AXIOS.get(`user/name/change/${data.newName}`, {
      headers: {
        "Authorization": `Bearer ${data.token}`,
      },
    });
  } catch (error) {
    return error;
  }
};

export const setAvatar = async (data: ActionSetAvatarModel) => {
  try {
    return await AXIOS.post(`user/avatar/set`, data.formData, {
      headers: {
        "Authorization": `Bearer ${data.token}`,
        "Content-Type": `multipart/form-data`,
      },
    });
  } catch (error) {
    return error;
  }
};
