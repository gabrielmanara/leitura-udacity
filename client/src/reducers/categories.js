import {
  SET_ALL_CATEGORIES
} from 'actions/categories';


export default function categories(state = {}, action) {
  const { allCategories } = action;

  switch (action.type) {
    case SET_ALL_CATEGORIES:

      return {
        ...state,
        ...allCategories.categories
      };
    default:
      return state
  }
}