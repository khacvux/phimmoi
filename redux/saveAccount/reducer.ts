import * as CONSTANTS from "./constants";
import { AccountModel } from "./models";

export interface InitStateModel {
  accountsSaved: Array<AccountModel>;
  message: string;
}

interface ActionModel {
  type: string;
  payload: any;
}

const initState: InitStateModel = {
  accountsSaved: [],
  message: undefined,
};

const reducer = (state = initState, action: ActionModel) => {
  switch (action.type) {
    case CONSTANTS.SAVE_ACCOUNT_ON_DEVICE:
      return {
        ...state,
        accountsSaved: [...state?.accountsSaved, action.payload],
      };
    case CONSTANTS.UNSAVE_ACCOUNT_ON_DEVICE:
      const newList = state.accountsSaved.filter(
        (item) => (item.email != action.payload.email)
      );
      return {
        ...state,
        accountsSaved: newList,
      };
    default: return state
  }
};

const r = 123;
export default reducer