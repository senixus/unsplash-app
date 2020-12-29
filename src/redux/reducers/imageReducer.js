import * as actionTypes from "../actions/actionTypes";
import { initialState } from "./initialState";

export const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PHOTOS:
      return {
        ...state,
        photos: action.payload,
      };
    case actionTypes.GET_SINGLE_PHOTO:
      return {
        ...state,
        photo: action.payload,
      };
    case actionTypes.GET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case actionTypes.GET_USER_PHOTOS:
      return {
        ...state,
        userPhotos: action.payload,
      };
    case actionTypes.SEARCH_USER:
      return {
        ...state,
        searchUser: action.payload,
      };
    case actionTypes.SEARCH_PHOTO:
      return {
        ...state,
        searchPhoto: action.payload,
      };
    default:
      return state;
  }
};
