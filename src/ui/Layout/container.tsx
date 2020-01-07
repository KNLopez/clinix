import React from "react";
import HeaderContainer from "./Header/container";
import Sidebar from "./Sidebar/container";
import BodyContainer from "./Body/container";

const LayoutContainer = () => (
  <>
    <HeaderContainer />
    <Sidebar />
    <BodyContainer />
  </>
);

export default LayoutContainer;
