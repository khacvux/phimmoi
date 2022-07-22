export interface MovieModel {
  _id: string;
  name: string;
  posterUrl: string;
  movieUrl: string;
  duration: string | undefined;
  view: number | undefined;
  category: string | undefined;
  description: string;
}

export interface CategoryModel {
  idCategory: string;
  name: string;
}

export interface ResultSearch {
  idMovie: string;
  name: string;
  posterUrl: string;
}

export interface GetListMovieByCategoryModel {
  idCategory: string;
  name: string;
}

export interface ActionGetListMovieByCategoryModel
  extends GetListMovieByCategoryModel {
  token: string;
}

export interface GetInfoMovieModel {
  idMovie: string;
}

export interface ActionGetInfMovieModel extends GetInfoMovieModel {
  token: string;
}

export interface SearchMovieLikeName {
  keyword: string;
}

export interface ActionSearchMovieLikeName extends SearchMovieLikeName {
  token: string;
}
