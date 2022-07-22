import * as CONSTANTS from "./constants"
import { AccountModel } from "./models"

export const saveAccountOnDevice = (payload: AccountModel) => {
    return {
        type: CONSTANTS.SAVE_ACCOUNT_ON_DEVICE,
        payload
    }
}

export const removeAccountOnDevice = (payload: AccountModel) => {
    return {
        type: CONSTANTS.UNSAVE_ACCOUNT_ON_DEVICE,
        payload
    }
}