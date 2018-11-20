import { getPostsAPI, 
         voteAPI, 
         getPostAPI, 
         newPostAPI, 
         deletePostAPI,
         updatePostAPI } from 'utils/api';
import { toObject } from 'utils/helpers';
export const SET_ALL_POSTS = 'SET_ALL_POSTS';
export const SET_POST = 'SET_POST';
export const VOTE_POST = 'VOTE_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const DELETED_POST = 'DELETED_POST';

export function fetchAllPosts() {
  return (dispatch) => {
    return getPostsAPI()
      .then((posts) => {
      
        dispatch(setAllPosts(toObject(posts)));
      });
  }
}

export function fetchPost(id) {
  return (dispatch) => {
    return getPostAPI(id)
      .then((post) => {
        dispatch(setPost(post));
      });
  }
}

export function newPost(post) {
  return (dispatch) => {
    return newPostAPI(post)
      .then((post) => {
        dispatch(setPost(post));
      });
  }
}

export function handleVote(param) {
  return (dispatch) => {
    return voteAPI(param)
      .then((e) => {
        dispatch(votePost(param));
      })
  }
}

export function deletePost(id) {
  return (dispatch) => {
    return deletePostAPI(id)
      .then((post) => {
        dispatch(deletedPost(post));
      })
  }
}

/**
 * Update post
 * @param  {int} id
 * @param  {object} post
 */
export function handleUpdatePost(id, post) {
  return (dispatch) => {
    return updatePostAPI(id, post)
      .then((post) => {
        dispatch(updatePost(post));
      })
  }
}


// Actions
export const setAllPosts = allPosts => ({
  type: SET_ALL_POSTS,
  allPosts
});

export const setPost = post => ({
  type: SET_POST,
  post
});

export const updatePost = post => ({
  type: UPDATE_POST,
  post
});

export const deletedPost = post => ({
  type: DELETED_POST,
  post
});

export const votePost = ({id, vote}) => ({
  type: VOTE_POST,
  vote,
  id
});
