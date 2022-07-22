import { combineReducers } from "redux";

import auth, { InitStateModel as InitAuthStateModel } from './auth/reducer'
import movie, { InitStateModel as InitMovieStateModel } from './movie/reducer'
import library, { InitStateModel as InitLibraryStateModel } from './library/reducer'
import loading, { InitStateModel as InitLoadingStateModel } from './loading/reducer'
import save, { InitStateModel as InitSaveAccountStateModel } from './saveAccount/reducer'


export interface RootReducerModel {
    auth: InitAuthStateModel;
    movie: InitMovieStateModel;
    library: InitLibraryStateModel;
    loading: InitLoadingStateModel;
    save: InitSaveAccountStateModel;
  }

export default combineReducers<RootReducerModel>({
    auth,
    movie,
    library,
    loading,
    save
})