import React from "react";
import { HeaderPresenterProps } from "../presenter";
import styles from "../Header.module.scss";
import { ReactComponent as Caret } from "./caret.svg";

export interface OwnProps extends HeaderPresenterProps {
  logout: any;
}

const HeaderRight: React.FC<OwnProps> = ({ user, logout }) => (
  <div className={styles.headerImage}>
    <img alt={user.name} src={user.photo} /> {user.name}{" "}
    <div className={styles.caret}>
      <Caret onClick={logout} />
    </div>
  </div>
);

export default HeaderRight;
