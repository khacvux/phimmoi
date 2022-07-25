import { createReducer } from "typesafe-actions";
import * as CONSTANT from "./constants";
import * as ACTIONS from "./actions";
import { LibraryModel } from "./models";

export interface InitStateModel {
  email: string | undefined;
  name: string | undefined;
  avatarUrl: string | undefined;
  contactNumber: string | undefined;
  library: Array<LibraryModel> | undefined;
  token: string | undefined;
  message: string;
}
const initState: InitStateModel = {
  message: undefined,
  email: undefined,
  name: undefined,
  avatarUrl: undefined,
  contactNumber: undefined,
  library: undefined,
  token: undefined,
};

const reducer = (state: InitStateModel = initState, action: ActionModel) => {
  switch (action.type) {
    case CONSTANT.LOGIN:
      return state;
    case CONSTANT.LOGIN_SUCCESS:
      return {
        ...state,
        email: action.payload.email,
        name: action.payload.name,
        avatarUrl: action.payload.avatarUrl,
        contactNumber: action.payload.contactNumber,
        library: action.payload.library,
        token: action.payload.token,
        message: action.payload.message,
      };
    case CONSTANT.LOGIN_FAILURE:
      console.log(action.payload);
      return {
        ...state,
        message: action.payload?.message,
      };
    case CONSTANT.SIGNUP:
      return state;
    case CONSTANT.SIGNUP_SUCCESS:
      return {
        ...state,
        message: "Sign up success!",
      };
    case CONSTANT.SIGNUP_FAILURE:
      console.log(action.payload);
      return {
        ...state,
        message: action.payload?.message,
      };
    case CONSTANT.CHANGE_PASS:
      return state;
    case CONSTANT.CHANGE_PASS_SUCCESS:
      return {
        ...state,
        message: action.payload?.message,
      };
    case CONSTANT.CHANGE_PASS_FAILURE:
      console.log(action.payload);
      return {
        ...state,
        message: action.payload,
      };
    case CONSTANT.CHANGE_NAME:
      return state;
    case CONSTANT.CHANGE_NAME_SUCCESS:
      return { ...state, name: action.payload.newName };
    case CONSTANT.CHANGE_NAME_FAILURE:
      console.log(action.payload);
      return {
        ...state,
        message: action.payload.message,
      };
    case CONSTANT.SET_AVATAR:
      return state;
    case CONSTANT.SET_AVATAR_SUCCESS:
      return {
        ...state,
        message: action.payload.message,
        avartarUrl: action.payload.data,
      };
    case CONSTANT.SET_AVATAR_FAILURE:
      console.log(action.payload);
      return {
        ...state,
        message: action.payload?.message,
      };
    case CONSTANT.LOGOUT:
      return {
        message: "",
        email: "",
        name: "",
        avatarUrl: "",
        contactNumber: "",
        library: "",
        token: "",
      };
    default:
      return state;
  }
};


export default reducer