import { getCategoriesAPI } from 'utils/api';
export const SET_ALL_CATEGORIES = 'SET_ALL_CATEGORIES';

export function getAllCategories() {
  return (dispatch) => {
    return getCategoriesAPI()
      .then((allCategories) => {
        dispatch(setAllCategories(allCategories));
      })
  }
}

export function setAllCategories(allCategories) {
  return {
    type: SET_ALL_CATEGORIES,
    allCategories
  }
}