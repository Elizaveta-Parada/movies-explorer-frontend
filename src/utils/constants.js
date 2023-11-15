const BEATFILM = 'https://api.nomoreparties.co/beatfilm-movies';
const baseUrl = "http://localhost:3000";

const EMAIL_REGEX = "[a-z0-9]+@[a-z]+\\.{1,1}[a-z]{2,}";
const USER_NAME_REGEX = '^[A-Za-zА-Яа-яЁё /s -]+$';

const MaxScreen = 1280
const MediumScreen = 800
const SmallScreen = 600
const InitMoreMaxScreen = 16
const InitLessMaxScreen =12
const InitMediumScreen = 8
const InitSmallScreen = 5
const StepMaxScreen = 4
const StepMediumScreen = 3
const StepSmallScreen = 2

export {
    baseUrl,
    BEATFILM,
    EMAIL_REGEX,
    USER_NAME_REGEX,
    MaxScreen,
    MediumScreen,
    SmallScreen,
    InitMediumScreen,
    InitMoreMaxScreen,
    InitSmallScreen,
    StepMaxScreen,
    StepMediumScreen,
    StepSmallScreen,
    InitLessMaxScreen
  };