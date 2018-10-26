import { getCategories } from 'utils/api';
export const SET_ALL_CATEGORIES = 'SET_ALL_CATEGORIES';

export function getAllCategories() {
  return (dispatch) => {
    return getCategories()
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