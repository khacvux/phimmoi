import * as CONSTANTS from "./constants";
import * as MODELS from "./models";
import { mainListModel } from "./reducer";


export const getListCategory = (payload: string) => {
  return {
    type: CONSTANTS.GET_LIST_CATEGORY,
    payload
  }
}

export const getListCategorySuccess = (payload: Array<MODELS.CategoryModel>) => {
  return {
    type: CONSTANTS.GET_LIST_CATEGORY_SUCCESS,
    payload
  }
}

export const getListCategoryFailure = (payload: ActionFailModel | undefined) => {
  return {
    type: CONSTANTS.GET_LIST_CATEGORY_FAILURE,
    payload
  }
}

export const getListMovieByCategory = (payload: MODELS.ActionGetListMovieByCategoryModel) => {
  return {
    type: CONSTANTS.GET_LIST_MOVIE_BY_CATEGORY,
    payload
  }
}

export const getListMovieByCategorySuccess = (payload: mainListModel) => {
  return {
    type: CONSTANTS.GET_LIST_MOVIE_BY_CATEGORY_SUCCESS,
    payload
  }
}

export const getListMovieByCategoryFailure = (payload: ActionFailModel | undefined) => {
  return {
    type: CONSTANTS.GET_LIST_MOVIE_BY_CATEGORY_FAILURE,
    payload
  }
}

export const getInfoMovie = (payload: MODELS.ActionGetInfMovieModel) => {
  return {
    type: CONSTANTS.GET_INFO_MOVIE,
    payload
  }
}

export const getInfoMovieSuccess = (payload: MODELS.MovieModel) => {
  return {
    type: CONSTANTS.GET_INFO_MOVIE_SUCCESS,
    payload
  }
}

export const getInfoMovieFailure = (payload: ActionFailModel | undefined) => {
  return {
    type: CONSTANTS.GET_INFO_MOVIE_FAILURE,
    payload
  }
}

export const searchMovie = (payload: MODELS.ActionSearchMovieLikeName) => {
  return {
    type: CONSTANTS.SEARCH_MOVIE_LIKE_NAME,
    payload
  }
}

export const searchMovieSuccess = (payload: Array<MODELS.ResultSearch>) => {
  return {
    type: CONSTANTS.SEARCH_MOVIE_LIKE_NAME_SUCCESS,
    payload
  }
}

export const searchMovieFailure = (payload: ActionFailModel | undefined) => {
  return {
    type: CONSTANTS.SEARCH_MOVIE_LIKE_NAME_SUCCESS,
    payload
  }
}

export const getNewestMovie = (payload: string) => {
  return {
    type: CONSTANTS.GET_NEWEST_MOVIE,
    payload
  }
}

export const getNewestMovieSuccess = (payload: MODELS.MovieModel) => {
  return {
    type: CONSTANTS.GET_NEWEST_MOVIE_SUCCESS,
    payload
  }
}

export const getNewestMovieFailure = (payload: ActionFailModel | undefined) => {
  return {
    type: CONSTANTS.GET_NEWEST_MOVIE_FAILURE,
    payload
  }
}

export const getListNewestMovie = (payload: string) => {
  return {
    type: CONSTANTS.GET_LIST_NEWEST_MOVIE,
    payload
  }
}

export const getListNewestMovieSuccess = (payload: Array<MODELS.MovieModel>) => {
  return {
    type: CONSTANTS.GET_LIST_NEWEST_MOVIE_SUCCESS,
    payload
  }
}

export const getListNewestMovieFailure = (payload: ActionFailModel | undefined) => {
  return {
    type: CONSTANTS.GET_LIST_NEWEST_MOVIE_FAILURE,
    payload
  }
}

export const getListMovie = (payload: string) => {
  return {
    type: CONSTANTS.GET_LIST_MOVIE,
    payload
  }
}

export const getListMovieSuccess = (payload: mainListModel) => {
  return {
    type: CONSTANTS.GET_LIST_MOVIE_SUCCESS,
    payload
  }
}

export const getListMovieFailure = (payload: ActionFailModel | undefined) => {
  return {
    type: CONSTANTS.GET_LIST_MOVIE_FAILURE,
    payload
  }
}