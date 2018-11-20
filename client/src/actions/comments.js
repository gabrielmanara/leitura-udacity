import { getCommentsAPI, 
          updateCommentAPI,
          newCommentAPI,
          deleteCommentAPI,
          voteCommentAPI } from 'utils/api';
import { toObject } from 'utils/helpers';
export const SET_COMMENTS = 'SET_COMMENTS';
export const SET_COMMENT = 'SET_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

export function fetchComments(id) {
  return (dispatch) => {
    return getCommentsAPI(id)
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

export function updateVote(id, value) {
  return (dispatch) => {
    return voteCommentAPI(id, value)
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

export function handleDeleteComment(id) {
  return (dispatch) => {
    return deleteCommentAPI(id)
      .then((comment) => {
        dispatch(deleteComment(comment));
      });
  }
}

// Actions
export const setAllComments = comments => ({
  type: SET_COMMENTS,
  comments
});

export const deleteComment = comment => ({
  type: DELETE_COMMENT,
  comment
});

export const setComment = comment => ({
  type: SET_COMMENT,
  comment
});