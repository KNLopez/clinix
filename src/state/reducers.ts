import { combineReducers } from "redux";
import authReducer from "./ducks/auth/index";
import { LOGOUT_USER } from "./ducks/auth/constants";

const appReducer = combineReducers({
  auth: authReducer,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === LOGOUT_USER) {
    const { auth: authState } = state;
    state = {
      auth: authState,
    };
  }

  return appReducer(state, action);
};

export type ApplicationState = ReturnType<typeof rootReducer>;
export default rootReducer;
