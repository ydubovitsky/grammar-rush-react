import { showPopup } from '../features/popup/popup.slice';

const POPUP_PROPERTIES = {
  loginRejected: {
    message: "Ошибка входа",
    styles: {
      color: "white",
      backgroundColor: "red"
    }
  },
  loginFulfilled: {
    message: "Вы успешно осуществили вход",
    styles: {
      color: "white",
      backgroundColor: "#4BE066"
    }
  },
  logout: {
    message: "Вы вышли из вашей учетной записи",
    styles: {
      color: "white",
      backgroundColor: "#4BE066"
    }
  },
  themeCreateFulfilled: {
    message: "Новая тема успешно создана",
    styles: {
      color: "white",
      backgroundColor: "#01C9F7"
    }
  },
  taskAddFulfilled: {
    message: "Добавлена новая задача",
    styles: {
      color: "white",
      backgroundColor: "#4BE066"
    }
  },
  updateUserDataUpdated: {
    message: "Данные пользователя обновлены",
    styles: {
      color: "white",
      backgroundColor: "#4BE066"
    }
  },
  authRegistrationFulfilled: {
    message: "Поздравлчем, вы успешно зарегистрировались!",
    styles: {
      color: "white",
      backgroundColor: "#4BE066"
    }
  },
  authRegistrationRejected: {
    message: "Это имя пользователя занято",
    styles: {
      color: "white",
      backgroundColor: "red"
    }
  },
  updateUserDataRejected: {
    message: "Ошибка обновления данных",
    styles: {
      color: "white",
      backgroundColor: "red"
    }
  },
}

const PopupMiddleware = ({ dispatch, getState }) => next => action => {
  const { type } = action;

  switch (type) {
    // ---------------------------- AUTH ----------------------------
    case 'auth/login/rejected': {
      dispatch(showPopup(POPUP_PROPERTIES.loginRejected));
      break;
    }
    case 'auth/login/fulfilled': {
      dispatch(showPopup(POPUP_PROPERTIES.loginFulfilled));
      break;
    }
    case 'auth/logout': {
      dispatch(showPopup(POPUP_PROPERTIES.logout));
      break;
    }
    case 'auth/updateUserData/updated': {
      dispatch(showPopup(POPUP_PROPERTIES.updateUserDataUpdated));
      break;
    }
    case 'auth/updateUserData/rejected': {
      dispatch(showPopup(POPUP_PROPERTIES.updateUserDataRejected));
      break;
    }
    case 'auth/register/fulfilled': {
      dispatch(showPopup(POPUP_PROPERTIES.authRegistrationFulfilled));
      break;
    }
    case 'auth/register/rejected': {
      dispatch(showPopup(POPUP_PROPERTIES.authRegistrationRejected));
      break;
    }
    // ---------------------------- Theme ----------------------------
    case 'theme/add/fulfilled': {
      dispatch(showPopup(POPUP_PROPERTIES.themeCreateFulfilled));
      break;
    }
    // ---------------------------- TASK ----------------------------
    case 'task/add/fulfilled': {
      dispatch(showPopup(POPUP_PROPERTIES.taskAddFulfilled));
      break;
    }
    case 'card/setFavorite/fulfilled': {
      dispatch(showPopup(POPUP_PROPERTIES.setFavoriteFulfilled));
      break;
    }
    case 'card/update/fulfilled': {
      dispatch(showPopup(POPUP_PROPERTIES.updateCardSetFulfilled));
      break;
    }
    default: break;
  }
  next(action);
}

export default PopupMiddleware;