import * as MODELS from "../../types/user";


export interface UserState {
    user: MODELS.userModel,
    watchedMoviesList: Array<MODELS.watchedMoviesModel>
}