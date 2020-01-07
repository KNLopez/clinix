import { AUTH_USER, LOGOUT_USER } from "./constants";
import { User, AuthUserAction } from "./types";

const authUser = (user: User): AuthUserAction => {
  return {
    type: AUTH_USER,
    payload: user,
  };
};

const logoutUser = () => {
  return {
    type: LOGOUT_USER,
  };
};

export default {
  authUser,
  logoutUser,
};
