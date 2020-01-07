import React from "react";
import HeaderRight from "./HeaderRight/container";
import Logo from "./Logo/container";
import styles from "./Header.module.scss";
import { User } from "../../../state/ducks/auth/types";
import { useDispatch } from "react-redux";
import { authActions } from "../../../state/ducks/auth";
import { auth } from "../../../core/firebase/utils";

export interface HeaderPresenterProps {
  user: User;
}

const HeaderPresenter: React.FC<HeaderPresenterProps> = ({ user }) => {
  const dispatch = useDispatch();

  const logout = async () => {
    try {
      const signoutStatus = await auth.signOut();
      console.log(signoutStatus);
      dispatch(authActions.logoutUser());
    } catch {}
  };
  return (
    <div className={styles.headerContainer}>
      <Logo />
      <HeaderRight user={user} logout={logout} />
    </div>
  );
};

export default HeaderPresenter;
