import React from "react";
import { mq } from "../../device";
import HamburgerMenu from "../HamburgerMenu";
import { beige } from "../../globalStyles/variables.style";

const styledHeader = mq({
  height: "80px",
  backgroundColor: "rgb(0, 18, 51)",
  display: "flex",
  alignItems: "center",
  padding: "0 1rem",
});

const styledHeading = mq({
  color: beige,
  marginLeft: "1rem",
  fontSize: "14px"
});

const Header: React.FunctionComponent = () => {
  return (
    <header css={styledHeader}>
      <HamburgerMenu />
      <h1 css={styledHeading}>DOLLAR SHAVE CLUB</h1>
    </header>
  );
};

export default Header;
