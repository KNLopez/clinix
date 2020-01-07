import { ApplicationState } from "../../reducers";
import { User } from "./types";

const isAuthenticated = (state: ApplicationState): boolean =>
  Boolean(state.auth.user.email);

const currentUserDetails = (state: ApplicationState): User => state.auth.user;

export default {
  isAuthenticated,
  currentUserDetails,
};
