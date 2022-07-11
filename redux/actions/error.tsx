import { IAction } from "../../types/action"
import { LOG_ERROR } from "../constants/error"

export const error = (payload: any): IAction => {
    return {
        type: LOG_ERROR,
        payload
    }
}
