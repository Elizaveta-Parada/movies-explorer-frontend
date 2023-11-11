import {baseUrl}from './constants'

function processingResponse(res) {
  if (res.ok) {
      return res.json();
  } else {
      return Promise.reject(`код ошибки: ${res.status}`);
  }
}

export const register = (email, password, name) => {
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json", 
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email, password: password, name: name }),
  })
  .then(res => { return processingResponse(res) });
};

export const login = (email, password) => {
  return fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email, password: password }),
  })
  .then(res => { return processingResponse(res) });
};

export const checkToken = (token) => {
  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  .then(res => { return processingResponse(res) });
};