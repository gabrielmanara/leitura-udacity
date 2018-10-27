import {
  SET_ALL_POSTS,
  SET_POST,
  VOTE_POST
} from 'actions/posts';

const initialState = {
  allPosts: []
}

export default function posts(state = initialState, action) {
  const { allPosts } = action;

  switch (action.type) {
    case SET_ALL_POSTS:
      return {
        ...state,
        allPosts: {
          ...allPosts
        }
      };
    case VOTE_POST:
      return vote(state, action);

    case SET_POST:
      return post(state, action);

    default:
      return state
  }
}

function post(state = {}, action) {
  const { post } = action

  switch (action.type) {
    case SET_POST:
      return {
        ...state,
        post
      };
  
    default:
      return state;
  }
}

function vote(state = {}, action) {
  switch (action.type) {
    case VOTE_POST:
      let score = state.allPosts[action.id].voteScore;
      score = action.vote.option === 'upVote' ? score + 1 : score - 1;
      return {
        ...state,
        allPosts: {
          ...state.allPosts,
          [action.id]: {
            ...state.allPosts[action.id],
            voteScore: score
          }
        }
      }
    default:
      return state
  }
}