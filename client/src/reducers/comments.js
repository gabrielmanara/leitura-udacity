import {
  SET_COMMENTS,
  SET_COMMENT,
  DELETE_COMMENT
} from 'actions/comments';


export default function comments(state = {}, action) {
  const { comments, comment } = action;

  switch (action.type) {
    case SET_COMMENTS:
      return {
        ...state,
        ...comments
      };
    case SET_COMMENT:
      return {
        ...state,
        [comment.id] : {
          ...state[comment.id],
          ...comment
        }
      }
    case DELETE_COMMENT:
      let listOfComments = state;
      delete listOfComments[comment.id];

      return {
        ...listOfComments
      }
    default:
      return state
  }
}