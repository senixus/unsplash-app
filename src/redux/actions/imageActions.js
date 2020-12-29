import * as actionTypes from "./actionTypes";
import axios from "../../api/index";

export const getPhotos = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "/photos?&per_page=30&order_by=popular&"
      );

      dispatch({ type: actionTypes.GET_PHOTOS, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getSinglePhoto = (id) => {
  return async (dispatch) => {
    try {
      await axios.get("/photos");

      dispatch({ type: actionTypes.GET_SINGLE_PHOTO, payload: id });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getUser = (username) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/users/${username}`);

      dispatch({ type: actionTypes.GET_USER, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getUserPhotos = (username) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `/users/${username}/photos?&per_page=30`
      );

      dispatch({ type: actionTypes.GET_USER_PHOTOS, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const searchUser = (username) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/search/users/`, {
        params: { query: username },
      });

      dispatch({
        type: actionTypes.SEARCH_USER,
        payload: response.data.results,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const searchPhoto = (photo) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/search/photos?&per_page=30`, {
        params: { query: photo },
      });

      dispatch({
        type: actionTypes.SEARCH_PHOTO,
        payload: response.data.results,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
