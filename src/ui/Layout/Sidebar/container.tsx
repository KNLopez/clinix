import React from "react";
import { DASHBOARD_URL, APPOINTMENTS_URL, CLIENTS_URL } from "../../urls";
import { NavLink, withRouter } from "react-router-dom";
import styles from "./Sidebar.module.scss";

const Sidebar = () => (
  <>
    <div className={styles.sidebar}>
      <ul className="navigtaion">
        <li>
          <NavLink exact to={DASHBOARD_URL}>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink exact to={APPOINTMENTS_URL}>
            Appointments
          </NavLink>
        </li>
        <li>
          <NavLink exact to={CLIENTS_URL}>
            Clients
          </NavLink>
        </li>
      </ul>
    </div>
  </>
);
export default withRouter(Sidebar);
