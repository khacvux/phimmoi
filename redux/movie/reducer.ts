import * as CONSTANTS from "./constants";
import { MovieModel, ResultSearch } from "./models";

export interface mainListModel {
  name: string;
  list: Array<MovieModel>;
}

interface categoryModel {
  idCategory: string;
  name: string;
}

export interface InitStateModel {
  mainList: Array<mainListModel> | undefined;
  listCategory: Array<categoryModel> | undefined;
  message: string;
  infoMovie: MovieModel;
  resultSearch: Array<ResultSearch>;
  newest: MovieModel;
  listNewest: Array<MovieModel>;
}

const initState: InitStateModel = {
  mainList: undefined,
  listCategory: undefined,
  message: undefined,
  infoMovie: undefined,
  resultSearch: undefined,
  newest: undefined,
  listNewest: undefined,
};

const reducer = (state: InitStateModel = initState, action: ActionModel) => {
  switch (action.type) {
    case CONSTANTS.GET_LIST_CATEGORY:
      return state;
    case CONSTANTS.GET_LIST_CATEGORY_SUCCESS:
      return {
        ...state,
        listCategory: action.payload,
      };
    case CONSTANTS.GET_LIST_CATEGORY_FAILURE:
      console.log(action.payload);
      return {
        ...state,
        message: action.payload.message,
      };
    //  GET LIST MOVIE BY CATEGORY
    case CONSTANTS.GET_LIST_MOVIE_BY_CATEGORY:
      return state;
    case CONSTANTS.GET_LIST_MOVIE_BY_CATEGORY_SUCCESS:
      if (state?.mainList?.length) {
        return {
          ...state,
          // mainList: [
          //   ...state?.mainList,
          //   { name: action.payload.name, list: action.payload?.list },
          // ],
        };
      } else {
        return {
          ...state,
          // mainList: [{ name: action.payload.name, list: action.payload?.list }],
        };
      }

    case CONSTANTS.GET_LIST_MOVIE_BY_CATEGORY_FAILURE:
      console.log(action.payload);
      return {
        ...state,
        message: action.payload.message,
      };

    //GET INFO MOVIE
    case CONSTANTS.GET_INFO_MOVIE:
      return state;
    case CONSTANTS.GET_INFO_MOVIE_SUCCESS:
      return {
        ...state,
        infoMovie: action.payload,
      };
    case CONSTANTS.GET_INFO_MOVIE_FAILURE:
      console.log(action.payload);
      return { ...state, message: action.payload.message };

    //SEARCH MOVIE
    case CONSTANTS.SEARCH_MOVIE_LIKE_NAME:
      return state;
    case CONSTANTS.SEARCH_MOVIE_LIKE_NAME_SUCCESS:
      return {
        ...state,
        resultSearch: action.payload,
      };
    case CONSTANTS.SEARCH_MOVIE_LIKE_NAME_FAILURE:
      console.log(action.payload);
      return {
        ...state,
        message: action.payload.message,
      };
    case CONSTANTS.GET_NEWEST_MOVIE:
      return {
        ...state,
      };
    case CONSTANTS.GET_NEWEST_MOVIE_SUCCESS:
      return {
        ...state,
        newest: action.payload,
      };
    case CONSTANTS.GET_NEWEST_MOVIE_FAILURE:
      console.log(action.payload);
      return state;

    case CONSTANTS.GET_LIST_NEWEST_MOVIE:
      return state;
    case CONSTANTS.GET_LIST_NEWEST_MOVIE_SUCCESS:
      return {
        ...state,
        listNewest: action.payload,
      };
    case CONSTANTS.GET_LIST_NEWEST_MOVIE_FAILURE:
      console.log(action.payload);
      return state;
      
    case CONSTANTS.GET_LIST_MOVIE:
      return state;
    case CONSTANTS.GET_LIST_MOVIE_SUCCESS:
      return {
        ...state,
        mainList: action.payload,
      };
    case CONSTANTS.GET_LIST_MOVIE_FAILURE:
      console.log(action.payload);
      return state;
    default:
      return state;
  }
};

export default reducer;
