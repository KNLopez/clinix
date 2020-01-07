import React from "react";
import { Route, RouteProps } from "react-router-dom";
import PrivateRoutePresenter from "./presenter";
import { useSelector } from "react-redux";
import { authSelectors } from "../../../state/ducks/auth";

interface OwnProps extends RouteProps {
  component: React.ComponentType;
}

const PrivateRouteContainer: React.FC<OwnProps> = ({
  component: Component,
  ...props
}) => {
  const isUserAuthenticated = useSelector(authSelectors.isAuthenticated);
  const render = (props: any) => (
    <PrivateRoutePresenter
      {...props}
      component={Component}
      isAuthenticated={isUserAuthenticated}
    />
  );

  return <Route {...props} render={render} />;
};

export default PrivateRouteContainer;
