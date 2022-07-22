import * as ACTIONS from "./actions";

export interface InitStateModel {
  loading: boolean;
}

const initState: InitStateModel = {
  loading: false,
};

const reducer = (state: InitStateModel = initState, action: ActionModel) => {
  switch (action.type) {
    case ACTIONS.ADD_LOADING_ANIMATION:
      return {
        ...state,
        loading: true,
      };
    case ACTIONS.REMOVE_LOADING_ANIMATION:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer