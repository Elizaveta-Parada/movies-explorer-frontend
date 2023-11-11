import {BEATFILM} from '../utils/constants'

function processingResponse(res) {
    if (res.ok) {
        return res.json();
    } else {
        return Promise.reject(`код ошибки: ${res.status}`);
    }
  }

export function getMovies() {
  return fetch(BEATFILM, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => processingResponse(res));
}