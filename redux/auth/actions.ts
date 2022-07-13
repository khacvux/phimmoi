import { createAsyncAction } from "typesafe-actions";
import * as CONSTANTS from "./constants";
import * as MODELS from "./models";

export const loginAsync = createAsyncAction(
  CONSTANTS.LOGIN,
  CONSTANTS.LOGIN_SUCCESS,
  CONSTANTS.LOGIN_FAILURE
)<MODELS.LoginModel, MODELS.ResLoginModel, ActionFailModel | undefined>();

export const signupAsync = createAsyncAction(
  CONSTANTS.SIGNUP,
  CONSTANTS.SIGNUP_SUCCESS,
  CONSTANTS.SIGNUP_FAILURE
)<MODELS.SignupModel, MODELS.ResSignupModel, ActionFailModel | undefined>();

export const changePasswordAsync = createAsyncAction(
  CONSTANTS.CHANGE_PASS,
  CONSTANTS.CHANGE_PASS_SUCCESS,
  CONSTANTS.CHANGE_PASS_FAILURE
)<MODELS.ActionChangePassModel, ResponseModel, ActionFailModel>();

export const changeNameAsync = createAsyncAction(
  CONSTANTS.CHANGE_NAME,
  CONSTANTS.CHANGE_NAME_SUCCESS,
  CONSTANTS.CHANGE_NAME_FAILURE
)<MODELS.ActionChangeNameModel, MODELS.ChangeNameModel, ActionFailModel>();

export const setAvatarAsync = createAsyncAction(
  CONSTANTS.SET_AVATAR,
  CONSTANTS.SET_AVATAR_SUCCESS,
  CONSTANTS.SET_AVATAR_FAILURE
)<MODELS.ActionSetAvatarModel, ResponseModel, ActionFailModel>();
