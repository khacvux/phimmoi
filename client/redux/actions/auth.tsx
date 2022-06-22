import * as TYPES from '../constants/auth'
import { IAction } from '../../types/action'
import * as MODELS from '../../types/user'


export const login = (payload: MODELS.loginInput): IAction => {
    return {
        type: TYPES.LOGIN,
        payload
    }
}

export const signup = (payload: MODELS.signupInput): IAction => {
    return {
        type: TYPES.SIGNUP,
        payload
    }
}

