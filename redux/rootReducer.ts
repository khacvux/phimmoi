import { combineReducers } from "redux";

import auth from './auth/reducer'
import movie from './movie/reducer'
import library from './library/reducer'


export default combineReducers({
    auth,
    movie,
    library,
})