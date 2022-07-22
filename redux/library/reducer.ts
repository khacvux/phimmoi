import * as CONSTANTS from "./constants";
import { LibraryModel } from "./models";

export interface InitStateModel {
  library: Array<LibraryModel>;
  message: string;
  save: boolean;
}

const initState: InitStateModel = {
  library: undefined,
  save: undefined,
  message: undefined,
};

const reducer = (state: InitStateModel = initState, action: ActionModel) => {
  switch (action.type) {
    case CONSTANTS.GET_LIBRARY:
      return state;
    case CONSTANTS.GET_LIBRARY_SUCCESS:
      return {
        ...state,
        library: action.payload,
      };
    case CONSTANTS.GET_LIBRARY_FAILURE:
      console.log(action.payload);
      return {
        ...state,
        message: action.payload.message,
      };
    case CONSTANTS.SAVE_TO_LIBRARY:
      return state;
    case CONSTANTS.SAVE_TO_LIBRARY_SUCCESS:
      if (!state.library)
        return {
          ...state,
          library: [action.payload],
        };
      return {
        ...state,
        library: [...state?.library, action?.payload],
      };
    case CONSTANTS.SAVE_TO_LIBRARY_FAILURE:
      console.log(action?.payload);
      return {
        ...state,
        message: action.payload?.message,
      };
    case CONSTANTS.UNSAVE_TO_LIBRARY:
      return state;
    case CONSTANTS.UNSAVE_TO_LIBRARY_SUCCESS:
      const newLib = state.library.filter((item) => {
        return item._id != action.payload._id;
      });
      return {
        ...state,
        library: newLib,
      };
    case CONSTANTS.CHECK_SAVE:
      return state;
    case CONSTANTS.CHECK_SAVE_SUCCESS:
      return {
        ...state,
        message: action.payload.message,
        save: true,
      };
    case CONSTANTS.CHECK_SAVE_FAILURE:
      return {
        ...state,
        message: action.payload.message,
        save: false,
      };

    default:
      return state;
  }
};

export default reducer;
