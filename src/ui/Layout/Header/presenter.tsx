import React from "react";
import HeaderRight from "./HeaderRight/container";
import Logo from "./Logo/container";
import styles from "./Header.module.scss";

export interface User {
  id: string;
  username: string;
  image: string;
}

export interface HeaderPresenterProps {
  user: User;
}

const HeaderPresenter: React.FC<HeaderPresenterProps> = ({ user }) => {
  return (
    <div className={styles.headerContainer}>
      <Logo />
      <HeaderRight user={user} />
    </div>
  );
};

export default HeaderPresenter;
