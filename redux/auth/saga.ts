import { put, call, takeLatest } from "redux-saga/effects";
import * as ACTIONS from "./actions";
import * as CONSTANTS from "./constants";

import {
  LoginModel,
  ResLoginModel,
  ResSignupModel,
  SignupModel,
  ActionChangePassModel,
  ActionChangeNameModel,
  ActionSetAvatarModel,
} from "./models";
import * as LOADING from "../loading/actions";
import * as SAVE from "../saveAccount/actions";
import * as AuthAPI from "../../apis/authAPIs";

function* login(action: any) {
  const payload: LoginModel = action.payload;
  try {
    yield put(LOADING.startLoading());
    const response: ResponseGenerator = yield call(AuthAPI.login, payload);
    const data: ResLoginModel = response.data;
    if (data.successful) {
      yield put(ACTIONS.loginSuccess(data));
      yield put(
        SAVE.saveAccountOnDevice({
          name: data.name,
          email: data.email,
          avatarUrl: data.avatarUrl,
        })
      );
    } else yield put(ACTIONS.loginFailure(data));
  } catch (error) {
    yield put(ACTIONS.loginFailure(error));
  }
  yield put(LOADING.stopLoading());
}

function* signup(action: any) {
  const payload: SignupModel = action.payload;
  try {
    const response: ResponseGenerator = yield call(AuthAPI.signup, payload);
    const data: ResSignupModel = response.data;
    if (data.successful) {
      yield put(ACTIONS.signupSuccess(data));
    } else yield put(ACTIONS.signupFailure(data));
  } catch (error) {
    yield put(ACTIONS.signupFailure(error));
  }
}

function* changePassword(action: any) {
  const payload: ActionChangePassModel = action.payload;
  try {
    const response: ResponseGenerator = yield call(
      AuthAPI.changePassword,
      payload
    );
    const data: ResponseModel = response.data;
    if (data.successful) {
      yield put(ACTIONS.changePassSuccess(data));
    } else put(ACTIONS.changePassFailure(data));
  } catch (error) {
    yield put(ACTIONS.changePassFailure(error));
  }
}

function* changeName(action: any) {
  const payload: ActionChangeNameModel = action.payload;
  try {
    const response: ResponseGenerator = yield call(AuthAPI.changeName, payload);
    const data: ResponseModel = response.data;
    if (data.successful) {
      yield put(ACTIONS.changeNameSuccess({ newName: payload.newName }));
    } else yield put(ACTIONS.changeNameFailure(data));
  } catch (error) {
    yield put(ACTIONS.changeNameFailure(error));
  }
}

function* setAvatar(action: any) {
  const payload: ActionSetAvatarModel = action.payload;
  try {
    const response: ResponseGenerator = yield call(AuthAPI.setAvatar, payload);
    const data: ResLoginModel = response.data;
    if (data.successful) {
      yield put(ACTIONS.setAvatarSuccess(data));
    } else yield put(ACTIONS.setAvatarFailure(data));
  } catch (error) {
    yield put(ACTIONS.setAvatarFailure(error));
  }
}

const authSaga = [
  takeLatest(CONSTANTS.LOGIN, login),
  takeLatest(CONSTANTS.SIGNUP, signup),
  takeLatest(CONSTANTS.CHANGE_PASS, changePassword),
  takeLatest(CONSTANTS.CHANGE_NAME, changeName),
  takeLatest(CONSTANTS.SET_AVATAR, setAvatar),
];

export default authSaga;
