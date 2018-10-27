import { getPosts, vote, getPost } from 'utils/api';
import { toObject } from 'utils/helpers';
export const SET_ALL_POSTS = 'SET_ALL_POSTS';
export const SET_POST = 'SET_POST';
export const VOTE_POST = 'VOTE_POST';

export function fetchAllPosts() {
  return (dispatch) => {
    return getPosts()
      .then((posts) => {
        const postsToObject = toObject(posts);
        
        dispatch(setAllPosts(postsToObject(posts)));
      });
  }
}

export function fetchPost(id) {
  return (dispatch) => {
    return getPost(id)
      .then((post) => {
        dispatch(setPost(post));
      });
  }
}


export function handleVote(param) {
  return (dispatch) => {
    return vote(param)
      .then((e) => {
        dispatch(votePost(param));
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

export const votePost = ({id, vote}) => ({
  type: VOTE_POST,
  vote,
  id
});
