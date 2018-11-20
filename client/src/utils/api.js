const api = 'http://localhost:3001';

let token = localStorage.token;
if (!token) {
  token = localStorage.token = Math.random().toString(36).substr(-8);
}

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

/**
 * Get all posts
 */
export const getPostsAPI = () => {
  return fetch(`${api}/posts`, { headers })
    .then(response => response.json())
}


/** Get single post
 * @param  {int} id
 */
export const getPostAPI = (id) => {
  return fetch(`${api}/posts/${id}`, { headers })
    .then(response => response.json())
}

/** 
 * Delete a single post
 * @param  {int} id
 */
export const deletePostAPI = (id) => {
  return fetch(`${api}/posts/${id}`, {
    method: 'DELETE',
    headers: {
      ...headers,
      "Content-Type": "application/json"
    }
  }).then((response) => {
    console.log(response)
    return response.json()
  })
}

/**
 * @param  {int} id
 * @param  {object} post
 */
export const updatePostAPI = (id, post) => {
  return fetch(`${api}/posts/${id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    title: post.title,
    body: JSON.stringify(post)
  }).then((response) => {
    return response.json()
  })
}

export const newPostAPI = (post) => {
  return fetch(`${api}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(post)
  }).then((response) => {
    console.log(response)
    return response.json()
  })
}

export const getCommentsAPI = (id) => {
  return fetch(`${api}/posts/${id}/comments`, { headers })
    .then(response => response.json())
}


export function updateCommentAPI(id, value) {

  return fetch(`${api}/comments/${id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      timestamp: Date.now(),
      body: value
    })
  }).then((response) => response.json())
}

export function newCommentAPI(params) {
  return fetch(`${api}/comments`, {
    method: 'POST',
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(params)
  }).then((response) => {
    return response.json()
  })
}

export function voteCommentAPI(id, value) {
  const params = {
    option: value
  }

  return fetch(`${api}/comments/${id}`, {
    method: 'POST',
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(params)
  }).then((response) => response.json())
}


export const getCategoriesAPI = () =>
  fetch(`${api}/categories`, { headers })
    .then(response => response.json())

export const voteAPI = ({ id, vote }) =>
  fetch(`${api}/posts/${id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(vote)
  }).then(response => response.json())