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