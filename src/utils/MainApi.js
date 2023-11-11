import {baseUrl }from './constants'

function processingResponse(res) {
  if (res.ok) {
      return res.json();
  } else {
      return Promise.reject(`код ошибки: ${res.status}`);
  }
}

export const  getUserInfo = (token) => {
    return fetch(`${baseUrl}/users/me`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then((res) => processingResponse(res));
}

export const getMovies = (token) => {
    return fetch(`${baseUrl}/movies`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }).then((res) => processingResponse(res));
};
  
// метод добавления новой карточки на сервер
export const postMovie= (data, token) => {
    return fetch(`${baseUrl}/movies`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: 'https://api.nomoreparties.co' + data.image.url,
        trailerLink: data.trailerLink,
        thumbnail: 'https://api.nomoreparties.co' + data.image.formats.thumbnail.url,
        movieId: data.id,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
      }),
    }).then((res) => processingResponse(res));
};
  
// метод удаления карточки с сервера
export const deleteMovie = (cardId, token) => {
    return fetch(`${baseUrl}/movies/${cardId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }).then((res) => processingResponse(res));
};

// Метод изменения данных пользователя
export const setUserInfo = (name, email) => {
  return fetch(`${baseUrl}/users/me`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: name,
      email: email
    })
  }).then((res) => processingResponse(res));
}
