import { put, call, takeLatest, takeLeading, delay, takeEvery } from "redux-saga/effects";
import * as LibraryAPI from "../../apis/libraryAPIs";
import * as ACTIONS from "./actions";
import * as CONSTANTS from "./constants";
import { ActionLibraryModel, LibraryModel } from "./models";

function* getLibrary(action: any) {
  const token: string = action.payload;
  try {
    const response: ResponseGenerator = yield call(
      LibraryAPI.getLibrary,
      token
    );
    const data: ResponseModel = response.data;
    if (data.successful) {
      const library: Array<LibraryModel> = data.data;
      yield put(ACTIONS.getLibrarySuccess(library));
    } else yield put(ACTIONS.getLibraryFailure(data));
  } catch (error) {
    yield put(ACTIONS.getLibraryFailure(error));
  }
}

function* saveToLibrary(action: any) {
  const payload: ActionLibraryModel = action.payload;

  try {
    const response: ResponseGenerator = yield call(
      LibraryAPI.saveToLibrary,
      payload
    );
    const data: ResponseModel = response.data;
    if (data.successful) {
      console.log(data)
      yield put(
        ACTIONS.saveToLibrarySuccess({
          name: payload.name,
          posterUrl: payload.posterUrl,
          _id: payload._id,
        })
      );
    } else yield put(ACTIONS.saveToLibraryFailure(data));
  } catch (error) {
    yield put(ACTIONS.saveToLibraryFailure(error));
  }
}

function* unsaveToLibrary(action: any) {
  const payload: ActionLibraryModel = action.payload;
  try {
    const response: ResponseGenerator = yield call(
      LibraryAPI.unsaveToLibrary,
      payload
    );
    const data: ResponseModel = response.data;
    if (data.successful) {
      yield put(
        ACTIONS.unsaveToLibrarySuccess({
          name: payload.name,
          posterUrl: payload.posterUrl,
          _id: payload._id,
        })
      );
    } else put(ACTIONS.unsaveToLibraryFailure(data));
  } catch (error) {
    yield put(ACTIONS.unsaveToLibraryFailure(error));
  }
}

function* checkSave(action: any) {
  const payload: ActionLibraryModel = action.payload;
  try {
    const response: ResponseGenerator = yield call(
      LibraryAPI.checkSave,
      payload
    );
    const data: ResponseModel = response.data;
    if (data.successful) {
      yield put(ACTIONS.checkSaveSuccess(data.data));
    } else yield put(ACTIONS.checkSaveFailure(data.data));
  } catch (error) {
    yield put(ACTIONS.checkSaveFailure(error));
  }
}

const librarySaga = [
  takeLeading(CONSTANTS.GET_LIBRARY, getLibrary),
  takeEvery(CONSTANTS.SAVE_TO_LIBRARY, saveToLibrary),
  takeEvery(CONSTANTS.UNSAVE_TO_LIBRARY, unsaveToLibrary),
  takeLeading(CONSTANTS.CHECK_SAVE, checkSave),
];

export default librarySaga;
