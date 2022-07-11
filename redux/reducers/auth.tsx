import { IAction } from '../../types/action';
import { userModel, watchedMoviesModel } from '../../types/user';
import * as TYPES from '../constants/auth'
import { UserState } from '../models';


const initialState: UserState = {
    user: {} as userModel,
    watchedMoviesList: []
}


const reducers = (state = initialState, action: IAction) => {
    switch (action.type) {
        case TYPES.LOGIN:
            return state;
        
        case TYPES.SIGNUP:
            return state;

        default:
            return state;
    }
}

export default reducers;