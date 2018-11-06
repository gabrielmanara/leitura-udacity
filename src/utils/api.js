const api = 'http://localhost:3001';

let token = localStorage.token;
if (!token) {
  token = localStorage.token = Math.random().toString(36).substr(-8);
}

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export const getPosts = () => {
  return fetch(`${api}/posts`, { headers })
    .then(response => response.json())
}

export const getPost = (id) => {
  return fetch(`${api}/posts/${id}`, { headers })
    .then(response => response.json())
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

export const getComments = (id) => {
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


export const getCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(response => response.json())

export const vote = ({ id, vote }) =>
  fetch(`${api}/posts/${id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(vote)
  }).then(response => response.json())