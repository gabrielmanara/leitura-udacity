import {
  SET_ALL_POSTS,
} from 'actions/posts';


export default function posts(state = {}, action) {
  const { allPosts } = action;

  switch (action.type) {
    case SET_ALL_POSTS:
      return {
        ...state,
        ...allPosts
      };
    default:
      return state
  }
}
