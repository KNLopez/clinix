import React from "react";
import { HeaderPresenterProps } from "../presenter";
import styles from "../Header.module.scss";
import { ReactComponent as Caret } from "./caret.svg";

const HeaderRight: React.FC<HeaderPresenterProps> = ({ user }) => (
  <div className={styles.headerImage}>
    <img src={user.image} /> {user.username}{" "}
    <div className={styles.caret}>
      <Caret />
    </div>
  </div>
);

export default HeaderRight;
