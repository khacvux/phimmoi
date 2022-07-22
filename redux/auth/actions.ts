
import * as CONSTANTS from "./constants";
import * as MODELS from "./models";


export const login = (payload: MODELS.LoginModel) => {
  return {
    type: CONSTANTS.LOGIN,
    payload
  }
}

export const loginSuccess = (payload: MODELS.ResLoginModel) => {
  return {
    type: CONSTANTS.LOGIN_SUCCESS,
    payload
  }
}

export const loginFailure = (payload: ActionFailModel | undefined) => {
  return {
    type: CONSTANTS.LOGIN_FAILURE,
    payload
  }
}

export const signup = (payload: MODELS.SignupModel) => {
  return {
    type: CONSTANTS.SIGNUP,
    payload
  }
}

export const signupSuccess = (payload: MODELS.ResSignupModel) => {
  return {
    type: CONSTANTS.SIGNUP_SUCCESS,
    payload
  }
}

export const signupFailure = (payload: ActionFailModel | undefined) => {
  return {
    type: CONSTANTS.SIGNUP_FAILURE,
    payload
  }
}

export const changePass = (payload: MODELS.ActionChangePassModel) => {
  return {
    type: CONSTANTS.CHANGE_PASS,
    payload
  }
}

export const changePassSuccess = (payload: ResponseModel) => {
  return {
    type: CONSTANTS.CHANGE_PASS_SUCCESS,
    payload
  }
}

export const changePassFailure = (payload: ActionFailModel | undefined) => {
  return {
    type: CONSTANTS.CHANGE_PASS_FAILURE,
    payload
  }
}

export const changeName = (payload: MODELS.ActionChangeNameModel) => {
  return {
    type: CONSTANTS.CHANGE_NAME,
    payload
  }
}

export const changeNameSuccess = (payload: MODELS.ChangeNameModel) => {
  return {
    type: CONSTANTS.CHANGE_NAME_SUCCESS,
    payload
  }
}

export const changeNameFailure = (payload: ActionFailModel | undefined) => {
  return {
    type: CONSTANTS.CHANGE_NAME_FAILURE,
    payload
  }
}

export const setAvatar = (payload: MODELS.ActionSetAvatarModel) => {
  return {
    type: CONSTANTS.SET_AVATAR,
    payload
  }
}

export const setAvatarSuccess = (payload: ResponseModel) => {
  return {
    type: CONSTANTS.SET_AVATAR_SUCCESS,
    payload
  }
}

export const setAvatarFailure = (payload: ActionFailModel | undefined) => {
  return {
    type: CONSTANTS.SET_AVATAR_FAILURE,
    payload
  }
}

export const logout = () => {
  return {
    type: CONSTANTS.LOGOUT,
  }
}