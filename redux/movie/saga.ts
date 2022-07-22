import {
  put,
  call,
  takeLatest,
  takeLeading,
  takeEvery,
  delay,
} from "redux-saga/effects";
import * as MovieAPI from "../../apis/movieAPIs";
import * as ACTIONS from "./actions";
import * as CONSTANTS from "./constants";
import * as LOADING from "../loading/actions";

import {
  ActionGetInfMovieModel,
  ActionGetListMovieByCategoryModel,
  ActionSearchMovieLikeName,
  CategoryModel,
  MovieModel,
  ResultSearch,
} from "./models";
import { mainListModel } from "./reducer";

function* getListCategory(action: any) {
  const token: string = action.payload;
  try {
    const response: ResponseGenerator = yield call(
      MovieAPI.getListCategory,
      token
    );
    const data: ResponseModel = response.data;
    if (data.successful) {
      const listCategories: Array<CategoryModel> = data.data;
      yield put(ACTIONS.getListCategorySuccess(listCategories));
    } else yield put(ACTIONS.getListCategoryFailure(data));
  } catch (error) {
    yield put(ACTIONS.getListCategoryFailure(error));
  }
}

function* getListMovieByCategory(action: any) {
  const payload: ActionGetListMovieByCategoryModel = action.payload;
  try {
    const response: ResponseGenerator = yield call(
      MovieAPI.getListMovieByCategory,
      payload
    );
    const data: ResponseModel = response.data;
    if (data.successful) {
      if (data.data.length) {
        yield put(
          ACTIONS.getListMovieByCategorySuccess({
            name: payload.name,
            list: data?.data,
          })
        );
      }
    } else yield put(ACTIONS.getListMovieByCategoryFailure(data));
  } catch (error) {
    yield put(ACTIONS.getListMovieByCategoryFailure(error));
  }
}

function* getInfoMovie(action: any) {
  const payload: ActionGetInfMovieModel = action.payload;
  try {
    const response: ResponseGenerator = yield call(
      MovieAPI.getInfoMovie,
      payload
    );
    const data: ResponseModel = response.data;
    if (data.successful) {
      const info: MovieModel = data.data;
      yield put(ACTIONS.getInfoMovieSuccess(info));
    } else yield put(ACTIONS.getInfoMovieFailure(data));
  } catch (error) {
    yield put(ACTIONS.getInfoMovieFailure(error));
  }
}

function* searchMovie(action: any) {
  const payload: ActionSearchMovieLikeName = action.payload;
  try {
    if (payload.keyword) {
      yield put(LOADING.startLoading());
      yield delay(1000);
      const response: ResponseGenerator = yield call(
        MovieAPI.searchMovieLikeName,
        payload
      );
      const data: ResponseModel = response.data;
      if (data.successful) {
        const resultSearch: Array<ResultSearch> = data.data;
        yield put(ACTIONS.searchMovieSuccess(resultSearch));
      } else yield put(ACTIONS.searchMovieFailure(data));
    } else yield put(ACTIONS.searchMovieSuccess(undefined));
  } catch (error) {
    yield put(ACTIONS.searchMovieFailure(error));
  }
  yield put(LOADING.stopLoading());
}

function* getNewest(action: any) {
  try {
    const token: string = action.payload;
    const response: ResponseGenerator = yield call(
      MovieAPI.getNewestMovie,
      token
    );
    const data: ResponseModel = response.data;
    if (data.successful) {
      const payload: MovieModel = data.data;
      console.log(payload);
      yield put(ACTIONS.getNewestMovieSuccess(payload));
    } else yield put(ACTIONS.getNewestMovieFailure(data));
  } catch (error) {
    yield put(ACTIONS.getNewestMovieFailure(error));
  }
}

function* getListNewest(action: any) {
  try {
    const token: string = action.payload;
    const response: ResponseGenerator = yield call(
      MovieAPI.getListNewestMovie,
      token
    );
    const data: ResponseModel = response.data;
    if (data.successful) {
      const payload: Array<MovieModel> = data.data;
      yield put(ACTIONS.getListNewestMovieSuccess(payload));
    } else yield put(ACTIONS.getListNewestMovieFailure(data));
  } catch (error) {
    yield put(ACTIONS.getListNewestMovieFailure(error));
  }
}

function* getMainList(action: any) {
  try {
    const token: string = action.payload;
    const response: ResponseGenerator = yield call(
      MovieAPI.getListMovie,
      token
    );
    const data: ResponseModel = response.data;
    if (data.successful) {
      const mainList: mainListModel = data.data;
      yield put(ACTIONS.getListMovieSuccess(mainList));
    } else yield put(ACTIONS.getListMovieFailure(data));
  } catch (error) {
    yield put(ACTIONS.getListMovieFailure(error));
  }
}

const movieSaga = [
  takeLeading(CONSTANTS.GET_LIST_CATEGORY, getListCategory),
  takeEvery(CONSTANTS.GET_LIST_MOVIE_BY_CATEGORY, getListMovieByCategory),
  takeLatest(CONSTANTS.GET_INFO_MOVIE, getInfoMovie),
  takeLatest(CONSTANTS.SEARCH_MOVIE_LIKE_NAME, searchMovie),
  takeLatest(CONSTANTS.GET_NEWEST_MOVIE, getNewest),
  takeLatest(CONSTANTS.GET_LIST_NEWEST_MOVIE, getListNewest),
  takeLatest(CONSTANTS.GET_LIST_MOVIE, getMainList),
];

export default movieSaga;
