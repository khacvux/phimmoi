import { createReducer } from "typesafe-actions";
import {
  getInfoMovieAsync,
  getListCategoryAsync,
  getListMovieByCategoryAsync,
  searchMovieAsycn,
} from "./actions";
import { MovieModel, ResultSearch } from "./models";

export interface mainListModel {
  name: string;
  list: Array<MovieModel>;
}

interface categoryModel {
  idCategory: string;
  name: string;
}

interface InitStateModel {
  mainList: Array<mainListModel> | undefined;
  listCategory: Array<categoryModel> | undefined;
  message: string;
  infoMovie: MovieModel;
  resultSearch: Array<ResultSearch>;
}

const initState: InitStateModel = {
  mainList: undefined,
  listCategory: undefined,
  message: undefined,
  infoMovie: undefined,
  resultSearch: undefined,
};

export default createReducer(initState)
  // GET LIST CATERGORY
  .handleAction(getListCategoryAsync.request, (state: InitStateModel) => state)
  .handleAction(
    getListCategoryAsync.success,
    (
      state: InitStateModel,
      action: ReturnType<typeof getListCategoryAsync.success>
    ) => ({
      ...state,
      listCategory: action.payload,
    })
  )
  .handleAction(
    getListCategoryAsync.failure,
    (
      state: InitStateModel,
      action: ReturnType<typeof getListCategoryAsync.failure>
    ) => {
      return {
        ...state,
        message: action.payload.message,
      };
    }
  )

  //  GET LIST MOVIE BY CATEGORY
  .handleAction(
    getListMovieByCategoryAsync.request,
    (state: InitStateModel) => state
  )
  .handleAction(
    getListMovieByCategoryAsync.success,
    (
      state: InitStateModel,
      action: ReturnType<typeof getListMovieByCategoryAsync.success>
    ) => ({
      ...state,
      mainList: [
        ...state.mainList,
        { name: action.payload.name, list: action.payload.list },
      ],
    })
  )
  .handleAction(
    getListMovieByCategoryAsync.failure,
    (
      state: InitStateModel,
      action: ReturnType<typeof getListMovieByCategoryAsync.failure>
    ) => {
      console.log(action.payload);
      return {
        ...state,
        message: action.payload.message,
      };
    }
  )

  // GET INFO MOVIE
  .handleAction(getInfoMovieAsync.request, (state: InitStateModel) => state)
  .handleAction(
    getInfoMovieAsync.success,
    (
      state: InitStateModel,
      action: ReturnType<typeof getInfoMovieAsync.success>
    ) => ({
      ...state,
      infoMovie: action.payload,
    })
  )
  .handleAction(
    getInfoMovieAsync.failure,
    (
      state: InitStateModel,
      action: ReturnType<typeof getInfoMovieAsync.failure>
    ) => {
      console.log(action.payload);
      return { ...state, message: action.payload.message };
    }
  )

  // SEARCH MOVIE LIKE NAME
  .handleAction(searchMovieAsycn.request, (state: InitStateModel) => state)
  .handleAction(
    searchMovieAsycn.success,
    (
      state: InitStateModel,
      action: ReturnType<typeof searchMovieAsycn.success>
    ) => ({
      ...state,
      resultSearch: action.payload,
    })
  )
  .handleAction(
    searchMovieAsycn.failure,
    (
      state: InitStateModel,
      action: ReturnType<typeof searchMovieAsycn.failure>
    ) => {
      console.log(action.payload);
      return {
        ...state,
        message: action.payload.message,
      };
    }
  );
