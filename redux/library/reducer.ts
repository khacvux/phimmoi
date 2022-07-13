import { createReducer } from "typesafe-actions";
import {
  checkSaveAsync,
  getLibraryAsync,
  saveToLibraryAsync,
  unsaveToLibraryAsync,
} from "./actions";
import { LibraryModel } from "./models";

interface InitStateModel {
  library: Array<LibraryModel>;
  message: string;
}

const initState: InitStateModel = {
  library: undefined,
  message: undefined,
};

export default createReducer(initState)
    // GET LIBRARY
  .handleAction(getLibraryAsync.request, (state: InitStateModel) => state)
  .handleAction(
    getLibraryAsync.success,
    (
      state: InitStateModel,
      action: ReturnType<typeof getLibraryAsync.success>
    ) => ({
      ...state,
      library: action.payload,
    })
  )
  .handleAction(
    getLibraryAsync.failure,
    (
      state: InitStateModel,
      action: ReturnType<typeof getLibraryAsync.failure>
    ) => {
      console.log(action.payload);
      return {
        ...state,
        message: action.payload.message,
      };
    }
  )

  /// SAVE TO LIBRARY
  .handleAction(saveToLibraryAsync.request, (state: InitStateModel) => state)
  .handleAction(
    saveToLibraryAsync.success,
    (
      state: InitStateModel,
      action: ReturnType<typeof saveToLibraryAsync.success>
    ) => ({
      ...state,
      library: [...state.library, action.payload],
    })
  )
  .handleAction(
    saveToLibraryAsync.failure,
    (
      state: InitStateModel,
      action: ReturnType<typeof saveToLibraryAsync.failure>
    ) => {
      console.log(action.payload);
      return {
        ...state,
        message: action.payload.message,
      };
    }
  )

  // UNSAVE TO LIBRARY
  .handleAction(unsaveToLibraryAsync.request, (state: InitStateModel) => state)
  .handleAction(
    unsaveToLibraryAsync.success,
    (
      state: InitStateModel,
      action: ReturnType<typeof unsaveToLibraryAsync.success>
    ) => {
      const newLib = state.library.map((item) => {
        if (item._id != action.payload._id) return item;
      });
      return {
        ...state,
        library: newLib,
      };
    }
  )
  .handleAction(
    unsaveToLibraryAsync.failure,
    (
      state: InitStateModel,
      action: ReturnType<typeof unsaveToLibraryAsync.failure>
    ) => {
      console.log(action.payload);
      return {
        ...state,
        message: action.payload.message,
      };
    }
  )

  // CHECK SAVE IN LIBRARY
  .handleAction(checkSaveAsync.request, (state: InitStateModel) => state)
  .handleAction(
    checkSaveAsync.success,
    (
      state: InitStateModel,
      action: ReturnType<typeof checkSaveAsync.success>
    ) => ({
      ...state,
      message: action.payload.message,
    })
  )
  .handleAction(
    checkSaveAsync.failure,
    (
      state: InitStateModel,
      action: ReturnType<typeof checkSaveAsync.failure>
    ) => {
      console.log(action.payload);
      return {
        ...state,
        message: action.payload.message,
      };
    }
  );
