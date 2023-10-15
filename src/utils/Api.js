// import moviesData from './constants'

class ApiMovies {
    constructor({baseUrl}){
        this._baseUrl = baseUrl;
    }

     // Метод обработки ответа с сервера
     _processingResponse(res) {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(`код ошибки: ${res.status}`);
        }
    }

     // Метод загрузки карточек с сервера
     getMovies() {
        return fetch(`${this._baseUrl}/beatfilm-movies`, {
            headers: {
                'Content-Type': 'application/json',
              },
        })
        .then(res => this._processingResponse(res));
    }
}

const api = new ApiMovies({
    baseUrl: 'https://api.nomoreparties.co/',
}
)

export default api