import { put, call, takeLatest } from "redux-saga/effects";
import {
  changeNameAsync,
  changePasswordAsync,
  loginAsync,
  setAvatarAsync,
  signupAsync,
} from "./actions";
import {
  LoginModel,
  ResLoginModel,
  ResSignupModel,
  SignupModel,
  ActionChangePassModel,
  ActionChangeNameModel,
  ActionSetAvatarModel,
} from "./models";
import * as AuthAPI from "../../apis/authApis";

function* login(action: any) {
  const payload: LoginModel = action.payload;
  try {
    const response: ResponseGenerator = yield call(AuthAPI.login, payload);
    const data: ResLoginModel = response.data;
    if (data.successful) {
      yield put(loginAsync.success(data));
    } else yield put(loginAsync.failure(data));
  } catch (error) {
    yield put(loginAsync.failure(error));
  }
}

function* signup(action: any) {
  const payload: SignupModel = action.payload;
  try {
    const response: ResponseGenerator = yield call(AuthAPI.signup, payload);
    const data: ResSignupModel = response.data;
    if (data.successful) {
      yield put(signupAsync.success(data));
    } else yield put(signupAsync.failure(data));
  } catch (error) {
    yield put(signupAsync.failure(error));
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
      yield put(changePasswordAsync.success(data));
    } else put(changePasswordAsync.failure(data));
  } catch (error) {
    yield put(changePasswordAsync.failure(error));
  }
}

function* changeName(action: any) {
  const payload: ActionChangeNameModel = action.payload;
  try {
    const response: ResponseGenerator = yield call(AuthAPI.changeName, payload);
    const data: ResponseModel = response.data;
    if (data.successful) {
      yield put(changeNameAsync.success({ newName: payload.newName }));
    } else yield put(changeNameAsync.failure(data));
  } catch (error) {
    yield put(changeNameAsync.failure(error));
  }
}

function* setAvatar(action: any) {
  const payload: ActionSetAvatarModel = action.payload;
  try {
    const response: ResponseGenerator = yield call(AuthAPI.setAvatar, payload);
    const data: ResLoginModel = response.data;
    if (data.successful) {
      yield put(setAvatarAsync.success(data));
    } else yield put(setAvatarAsync.failure(data));
  } catch (error) {
    yield put(setAvatarAsync.failure(error));
  }
}

const authSaga = [
  takeLatest(loginAsync.request, login),
  takeLatest(signupAsync.request, signup),
  takeLatest(changePasswordAsync.request, changePassword),
  takeLatest(changeNameAsync.request, changeName),
  takeLatest(setAvatarAsync.request, setAvatar),
];

export default authSaga;
