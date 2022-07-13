import { put, call, takeLatest, takeLeading } from "redux-saga/effects";
import * as MovieAPI from "../../apis/movieAPIs";
import {
  getInfoMovieAsync,
  getListCategoryAsync,
  getListMovieByCategoryAsync,
  searchMovieAsycn,
} from "./actions";
import {
  ActionGetInfMovieModel,
  ActionGetListMovieByCategoryModel,
  ActionSearchMovieLikeName,
  CategoryModel,
  MovieModel,
  ResultSearch,
} from "./models";

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
      yield put(getListCategoryAsync.success(listCategories));
    } else yield put(getListCategoryAsync.failure(data));
  } catch (error) {
    yield put(getListCategoryAsync.failure(error));
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
      yield put(
        getListMovieByCategoryAsync.success({
          name: payload.name,
          list: data.data,
        })
      );
    } else yield put(getListMovieByCategoryAsync.failure(data));
  } catch (error) {
    yield put(getListMovieByCategoryAsync.failure(error));
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
      yield put(getInfoMovieAsync.success(info));
    } else yield put(getInfoMovieAsync.failure(data));
  } catch (error) {}
}

function* searchMovie(action: any) {
  const payload: ActionSearchMovieLikeName = action.payload;
  try {
    const response: ResponseGenerator = yield call(
      MovieAPI.searchMovieLikeName,
      payload
    );
    const data: ResponseModel = response.data;
    if (data.successful) {
      const resultSearch: Array<ResultSearch> = data.data;
      yield put(searchMovieAsycn.success(resultSearch));
    } else yield put(searchMovieAsycn.failure(data));
  } catch (error) {
    yield put(searchMovieAsycn.failure(error));
  }
}

const movieSaga = [
  takeLeading(getListCategoryAsync.request, getListCategory),
  takeLatest(getListMovieByCategoryAsync.request, getListMovieByCategory),
  takeLatest(getInfoMovieAsync.request, getInfoMovie),
  takeLatest(searchMovieAsycn.request, searchMovie),
];

export default movieSaga;
