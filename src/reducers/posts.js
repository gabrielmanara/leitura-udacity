import {
  SET_ALL_POSTS,
  VOTE_POST,
} from 'actions/posts';

export default function posts(state = {}, action) {
  const { allPosts } = action;

  switch (action.type) {
    case SET_ALL_POSTS:
      return {
        ...state,
        ...allPosts
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
      let score = state[action.id].voteScore;
      score = action.vote.option === 'upVote' ? score + 1 : score - 1;

      return {
        ...state,
        [action.id] : {
          ...state[action.id],
          voteScore: score,
        }
      };
    default:
      return state
  }
}