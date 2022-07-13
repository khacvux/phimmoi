import { put, call, takeLatest, takeLeading } from "redux-saga/effects";
import * as LibraryAPI from "../../apis/libraryAPIs";
import {
  checkSaveAsync,
  getLibraryAsync,
  saveToLibraryAsync,
  unsaveToLibraryAsync,
} from "./actions";
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
      yield put(getLibraryAsync.success(library));
    } else yield put(getLibraryAsync.failure(data));
  } catch (error) {
    yield put(getLibraryAsync.failure(error));
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
      yield put(
        saveToLibraryAsync.success({
          name: payload.name,
          posterUrl: payload.posterUrl,
          _id: payload._id,
        })
      );
    } else yield put(saveToLibraryAsync.failure(data));
    yield;
  } catch (error) {
    yield put(saveToLibraryAsync.failure(error));
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
        unsaveToLibraryAsync.success({
          name: payload.name,
          posterUrl: payload.posterUrl,
          _id: payload._id,
        })
      );
    } else put(unsaveToLibraryAsync.failure(data));
  } catch (error) {
    yield put(unsaveToLibraryAsync.failure(error));
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
      yield put(checkSaveAsync.success(data.data));
    }
    yield put(checkSaveAsync.failure(data));
  } catch (error) {
    yield put(checkSaveAsync.failure(error));
  }
}

const librarySaga = [
  takeLeading(getLibraryAsync.request, getLibrary),
  takeLatest(saveToLibraryAsync.request, saveToLibrary),
  takeLatest(unsaveToLibraryAsync.request, unsaveToLibrary),
  takeLatest(checkSaveAsync.request, checkSave),
];

export default librarySaga;
