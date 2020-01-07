import React, { useEffect } from "react";
import { Redirect, RouteComponentProps } from "react-router-dom";
import { SIGNIN_URL } from "../../urls";

export interface PrivateRoutePresenterProps
  extends Pick<RouteComponentProps, "location" | "history"> {
  isAuthenticated: boolean;
  component: React.ComponentType;
}

const PrivateRoutePresenter: React.FunctionComponent<PrivateRoutePresenterProps> = ({
  component: Component,
  isAuthenticated,
  ...props
}) => {
  useEffect(() => {
    if (!isAuthenticated) {
      props.history.replace("/");
    }
  }, [isAuthenticated]);

  if (isAuthenticated) {
    return <Component {...props} />;
  }

  return (
    <Redirect to={{ pathname: SIGNIN_URL, state: { from: props.location } }} />
  );
};

export default PrivateRoutePresenter;
