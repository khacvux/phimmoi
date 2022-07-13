import { createAsyncAction } from "typesafe-actions";
import * as CONSTANTS from "./constants";
import * as MODELS from "./models";
import { mainListModel } from "./reducer";

export const getListCategoryAsync = createAsyncAction(
  CONSTANTS.GET_LIST_CATEGORY,
  CONSTANTS.GET_LIST_CATEGORY_SUCCESS,
  CONSTANTS.GET_LIST_CATEGORY_FAILURE
)<string, Array<MODELS.CategoryModel>, ActionFailModel | undefined>();

export const getListMovieByCategoryAsync = createAsyncAction(
  CONSTANTS.GET_LIST_MOVIE_BY_CATEGORY,
  CONSTANTS.GET_LIST_MOVIE_BY_CATEGORY_SUCCESS,
  CONSTANTS.GET_LIST_MOVIE_BY_CATEGORY_FAILURE
)<MODELS.ActionGetListMovieByCategoryModel, mainListModel, ActionFailModel | undefined>();

export const getInfoMovieAsync = createAsyncAction(
  CONSTANTS.GET_INFO_MOVIE,
  CONSTANTS.GET_INFO_MOVIE_SUCCESS,
  CONSTANTS.GET_INFO_MOVIE_FAILURE
)<MODELS.ActionGetInfMovieModel, MODELS.MovieModel, ActionFailModel | undefined>();

export const searchMovieAsycn = createAsyncAction(
    CONSTANTS.SEARCH_MOVIE_LIKE_NAME,
    CONSTANTS.SEARCH_MOVIE_LIKE_NAME_SUCCESS,
    CONSTANTS.SEARCH_MOVIE_LIKE_NAME_FAILURE
)<MODELS.ActionSearchMovieLikeName, Array<MODELS.ResultSearch>,  ActionFailModel | undefined>();