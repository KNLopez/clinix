import React from "react";
import HeaderPresenter from "./presenter";

const HeaderContainer = () => {
  const user = {
    id: "1",
    username: "Roman Kutepov",
    image:
      "https://i1.wp.com/gentlehair.com/wp-content/uploads/2015/08/Untitled-design-1.png?fit=960%2C750&ssl=1",
  };
  return <HeaderPresenter user={user} />;
};

export default HeaderContainer;
