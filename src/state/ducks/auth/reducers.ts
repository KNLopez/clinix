import { User } from "./types";
import { AUTH_USER, LOGOUT_USER } from "./constants";
import { combineReducers } from "redux";

export const USER_DEFAULT_STATE: User = {
  email: "",
  name: "",
  id: "",
  photo: "",
};

export const user = (state: User = USER_DEFAULT_STATE, action: any): User => {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        email: action.payload.email,
        name: action.payload.displayName,
        id: action.payload.uid,
        photo: action.payload.photoURL,
      };
    case LOGOUT_USER:
      return { ...USER_DEFAULT_STATE };
    default:
      return state;
  }
};

const reducer = combineReducers({
  user,
});

export default reducer;
