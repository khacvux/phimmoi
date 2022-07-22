import * as CONSTANTS from "./constants";
import {
  ActionCheckSaveModel,
  ActionLibraryModel,
  LibraryModel,
} from "./models";

export const getLibrary = (payload: string) => {
  return {
    type: CONSTANTS.GET_LIBRARY,
    payload,
  };
};

export const getLibrarySuccess = (payload: Array<LibraryModel>) => {
  return {
    type: CONSTANTS.GET_LIBRARY_SUCCESS,
    payload,
  };
};

export const getLibraryFailure = (payload: ActionFailModel | undefined) => {
  return {
    type: CONSTANTS.GET_LIBRARY_FAILURE,
    payload,
  };
};

export const saveToLibrary = (payload: ActionLibraryModel) => {
  return {
    type: CONSTANTS.SAVE_TO_LIBRARY,
    payload,
  };
};

export const saveToLibrarySuccess = (payload: LibraryModel) => {
  return {
    type: CONSTANTS.SAVE_TO_LIBRARY_SUCCESS,
    payload,
  };
};

export const saveToLibraryFailure = (payload: ActionFailModel | undefined) => {
  return {
    type: CONSTANTS.SAVE_TO_LIBRARY_FAILURE,
    payload,
  };
};

export const unsaveToLibrary = (payload: ActionLibraryModel) => {
  return {
    type: CONSTANTS.UNSAVE_TO_LIBRARY,
    payload,
  };
};

export const unsaveToLibrarySuccess = (payload: LibraryModel) => {
  return {
    type: CONSTANTS.UNSAVE_TO_LIBRARY_SUCCESS,
    payload,
  };
};

export const unsaveToLibraryFailure = (
  payload: ActionFailModel | undefined
) => {
  return {
    type: CONSTANTS.UNSAVE_TO_LIBRARY_FAILURE,
    payload,
  };
};

export const checkSave = (payload: ActionCheckSaveModel) => {
  return {
    type: CONSTANTS.CHECK_SAVE,
    payload,
  };
};

export const checkSaveSuccess = (payload: ResponseModel) => {
  return {
    type: CONSTANTS.CHECK_SAVE_SUCCESS,
    payload,
  };
};

export const checkSaveFailure = (payload: ActionFailModel | undefined) => {
  return {
    type: CONSTANTS.CHECK_SAVE_FAILURE,
    payload,
  };
};
