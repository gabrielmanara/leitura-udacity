import { getPosts, vote } from 'utils/api';
export const SET_ALL_POSTS = 'SET_ALL_POSTS';
export const VOTE_POST = 'VOTE_POST';

export function fetchAllPosts(category) {
  return (dispatch) => {
    return getPosts(category)
      .then((posts) => {
        const postsToObject = (posts) =>
          posts.reduce((obj, item) => {
            obj[item.id] = item
            return obj
          }, {})
        
        dispatch(setAllPosts(postsToObject(posts)));
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

export const votePost = ({id, vote}) => ({
  type: VOTE_POST,
  vote,
  id
});
