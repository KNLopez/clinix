import React from "react";
import "./App.scss";
import LayoutContainer from "./Layout/container";
import { Route, Switch } from "react-router-dom";
import Signin from "./Auth/Signin/container";
import { SIGNIN_URL } from "./urls";
import PrivateRouteContainer from "./Components/privateRoute/container";

const AppPresenter: React.FC = () => {
  return (
    <Switch>
      <Route path={SIGNIN_URL} component={Signin} />
      <PrivateRouteContainer component={LayoutContainer} />
    </Switch>
  );
};

export default AppPresenter;
