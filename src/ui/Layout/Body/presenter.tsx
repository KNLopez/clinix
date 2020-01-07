import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { DASHBOARD_URL, APPOINTMENTS_URL, CLIENTS_URL } from "../../urls";
import Dashboard from "../../Dashboard/container";
import styles from "./Body.module.scss";

const BodyPresenter = () => (
  <div className={styles.bodyContainer}>
    <Switch>
      <Route exact path={DASHBOARD_URL} component={Dashboard} />
      <Route path={APPOINTMENTS_URL} component={Dashboard} />
      <Route path={CLIENTS_URL} component={Dashboard} />
      <Route path={CLIENTS_URL} component={Dashboard} />
      <Redirect to={DASHBOARD_URL} />
    </Switch>
  </div>
);

export default BodyPresenter;
