import { getComments, updateCommentAPI, newCommentAPI } from 'utils/api';
import { toObject } from 'utils/helpers';
export const SET_COMMENTS = 'SET_COMMENTS';
export const SET_COMMENT = 'SET_COMMENT';

export function fetchComments(id) {
  return (dispatch) => {
    return getComments(id)
      .then((comments) => {
        dispatch(setAllComments(toObject(comments)));
      });
  }
}

export function updateComment(id, value) {
  return (dispatch) => {
    return updateCommentAPI(id, value)
      .then((comment) => {
        dispatch(setComment(comment));
      });
  }
}

export function newComment(params) {
  return (dispatch) => {
    return newCommentAPI(params)
      .then((comment) => {
        dispatch(setComment(comment));
      });
  }
}

// Actions
export const setAllComments = comments => ({
  type: SET_COMMENTS,
  comments
});

export const setComment = comment => ({
  type: SET_COMMENT,
  comment
});