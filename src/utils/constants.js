const BEATFILM = 'https://api.nomoreparties.co/beatfilm-movies';
const baseUrl = "http://localhost:3000";

const EMAIL_REGEX = "[a-z0-9]+@[a-z]+\\.{1,1}[a-z]{2,}";
const USER_NAME_REGEX = '^[A-Za-zА-Яа-яЁё /s -]+$';
const emailError = "Введите корректный email"

export {
    baseUrl,
    BEATFILM,
    EMAIL_REGEX,
    USER_NAME_REGEX,
    emailError
  };