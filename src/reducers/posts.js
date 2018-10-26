import {
  SET_ALL_POSTS,
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

    default:
      return state
  }
}

function vote(state = {}, action) {
  switch (action.type) {
    case VOTE_POST:
      let score = state.allPosts[action.id].voteScore;
      score = action.vote.option === 'upVote' ? score + 1 : score - 1;

      console.log(state.allPosts);
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

      //return state
      // return {
      //   ...state,
      //   allPosts: {
      //     ...state.allPosts[action.id],
      //     voteScore: score,
      //   }
      // };
    default:
      return state
  }
}