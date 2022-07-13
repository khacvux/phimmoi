import { createReducer } from "typesafe-actions";
import {
  changeNameAsync,
  changePasswordAsync,
  loginAsync,
  setAvatarAsync,
  signupAsync,
} from "./actions";
import { LibraryModel } from "./models";

interface InitStateModel {
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

export default createReducer(initState)
  /// LOGIN ASYNC
  .handleAction(loginAsync.request, (state: InitStateModel) => state)
  .handleAction(
    loginAsync.success,
    (state: InitStateModel, action: ReturnType<typeof loginAsync.success>) => ({
      ...state,
      email: action.payload.email,
      name: action.payload.name,
      avatarUrl: action.payload.avatarUrl,
      contactNumber: action.payload.contactNumber,
      library: action.payload.library,
      token: action.payload.token,
      message: action.payload.message,
    })
  )
  .handleAction(
    loginAsync.failure,
    (state: InitStateModel, action: ReturnType<typeof loginAsync.failure>) => {
      console.log(action.payload);
      return {
        ...state,
        error: action.payload,
      };
    }
  )

  /// SIGN UP ASYNC
  .handleAction(signupAsync.request, (state: InitStateModel) => state)
  .handleAction(
    signupAsync.success,
    (
      state: InitStateModel,
      action: ReturnType<typeof signupAsync.success>
    ) => ({
      ...state,
      message: action.payload.message,
    })
  )
  .handleAction(
    signupAsync.failure,
    (state: InitStateModel, action: ReturnType<typeof signupAsync.failure>) => {
      console.log(action.payload);
      return {
        ...state,
        message: action,
      };
    }
  )

  /// CHANGE PASS ASYNC
  .handleAction(changePasswordAsync.request, (state: InitStateModel) => state)
  .handleAction(
    changePasswordAsync.success,
    (
      state: InitStateModel,
      action: ReturnType<typeof changePasswordAsync.success>
    ) => ({
      ...state,
      message: action.payload.message,
    })
  )
  .handleAction(
    changePasswordAsync.failure,
    (
      state: InitStateModel,
      action: ReturnType<typeof changePasswordAsync.failure>
    ) => {
      console.log(action.payload);
      return {
        ...state,
        message: action.payload,
      };
    }
  )

  /// CHANGE NAME ASYNC
  .handleAction(changeNameAsync.request, (state: InitStateModel) => ({
    ...state,
  }))
  .handleAction(
    changeNameAsync.success,
    (
      state: InitStateModel,
      action: ReturnType<typeof changeNameAsync.success>
    ) => ({ ...state, name: action.payload.newName })
  )
  .handleAction(
    changeNameAsync.failure,
    (
      state: InitStateModel,
      action: ReturnType<typeof changeNameAsync.failure>
    ) => ({ ...state, message: action.payload })
  )

  //SET AVATAR ASYNC
  .handleAction(setAvatarAsync.request, (state: InitStateModel) => ({
    ...state,
  }))
  .handleAction(
    setAvatarAsync.success,
    (
      state: InitStateModel,
      action: ReturnType<typeof setAvatarAsync.success>
    ) => ({
      ...state,
      message: action.payload.message,
      avartarUrl: action.payload.data,
    })
  )
  .handleAction(
    setAvatarAsync.failure,
    (
      state: InitStateModel,
      action: ReturnType<typeof setAvatarAsync.failure>
    ) => {
      console.log(action.payload);
      return {
        ...state,
        message: action.payload.message,
      };
    }
  );
