import React from "react";
import HeaderPresenter from "./presenter";
import { useSelector } from "react-redux";
import { authSelectors } from "../../../state/ducks/auth";

const HeaderContainer = () => {
  const user = useSelector(authSelectors.currentUserDetails);
  return <HeaderPresenter user={user} />;
};

export default HeaderContainer;
