export const ADD_LOADING_ANIMATION = "ADD_LOADING_ANIMATION";
export const REMOVE_LOADING_ANIMATION = "REMOVE_LOADING_ANIMATION";

export const startLoading = () => {
  return {
    type: ADD_LOADING_ANIMATION,
  };
};

export const stopLoading = () => {
  return {
    type: REMOVE_LOADING_ANIMATION,
  };
};
