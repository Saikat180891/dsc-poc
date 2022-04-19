import React from "react";

const styledBaseHam = {
  width: "2.5rem",
  height: "8px",
  backgroundColor: "beige",
  marginBottom: "10px",
};

const styledLastHam = {
  ...styledBaseHam,
  marginBottom: "0",
};

const HamburgerMenu: React.FC = () => {
  return (
    <div css={{ display: "flex", flexDirection: "column" }}>
      <div css={styledBaseHam}></div>
      <div css={styledLastHam}></div>
    </div>
  );
};

export default HamburgerMenu;
