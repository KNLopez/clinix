import React from "react";
import { auth } from "../../../core/firebase/utils";
import { RouteComponentProps, Redirect } from "react-router-dom";
import { HOME_URL } from "../../urls";
import SiginInPresenter from "./presenter";
import { authSelectors, authActions } from "../../../state/ducks/auth";
import { useSelector, useDispatch } from "react-redux";

export type SignInContainerProps = Pick<RouteComponentProps, "location">;

const SigninContainer: React.FC<SignInContainerProps> = props => {
  const { from } = props.location.state || { from: { pathname: HOME_URL } };
  const isAuthenticated = useSelector(authSelectors.isAuthenticated);
  const dispatch = useDispatch();
  auth.onAuthStateChanged((user: any) => {
    if (user) {
      dispatch(authActions.authUser(user));
    }
  });
  if (isAuthenticated) {
    return <Redirect to={from} />;
  }
  return <SiginInPresenter />;
};

export default SigninContainer;
