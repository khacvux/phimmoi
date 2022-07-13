import { createAsyncAction } from "typesafe-actions";
import * as CONSTANTS from "./constants";
import { ActionCheckSaveModel, ActionLibraryModel, LibraryModel } from "./models";

export const getLibraryAsync = createAsyncAction(
  CONSTANTS.GET_LIBRARY,
  CONSTANTS.GET_LIBRARY_SUCCESS,
  CONSTANTS.GET_LIBRARY_FAILURE
)<String, Array<LibraryModel>, ActionFailModel | undefined>();

export const saveToLibraryAsync = createAsyncAction(
  CONSTANTS.SAVE_TO_LIBRARY,
  CONSTANTS.CHECK_SAVE_SUCCESS,
  CONSTANTS.CHECK_SAVE_FAILURE
)<ActionLibraryModel, LibraryModel, ActionFailModel | undefined>();

export const unsaveToLibraryAsync = createAsyncAction(
  CONSTANTS.UNSAVE_TO_LIBRARY,
  CONSTANTS.UNSAVE_TO_LIBRARY_SUCCESS,
  CONSTANTS.CHECK_SAVE_FAILURE
)<ActionLibraryModel, LibraryModel, ActionFailModel | undefined>();

export const checkSaveAsync = createAsyncAction(
  CONSTANTS.CHECK_SAVE,
  CONSTANTS.CHECK_SAVE_SUCCESS,
  CONSTANTS.CHECK_SAVE_FAILURE
)<ActionCheckSaveModel, ResponseModel, ActionFailModel | undefined>();
