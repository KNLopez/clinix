import { AUTH_USER } from "./constants";

export interface User {
  email: string;
  name: string;
  id: string;
  photo: string;
}

export interface AuthUserAction {
  type: typeof AUTH_USER;
  payload: User;
}
