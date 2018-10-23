import { getPosts } from 'utils/api';
export const SET_ALL_POSTS = 'SET_ALL_POSTS';

export function fetchAllPosts() {
  debugger;
  return (dispatch) => {
    return getPosts()
      .then((posts) => {
        dispatch(setAllPosts(posts));
      });
  }
}

// Actions
export const setAllPosts = allPosts => ({
  type: SET_ALL_POSTS,
  allPosts
});