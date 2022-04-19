import React from "react";
import { darkBlue, beige } from "../../globalStyles/variables.style";
import { mq } from "../../device";
import { MainButton } from "../Button";
import Text from "../Text";

const styledHero = mq({
  display: "grid",
  gridTemplateColumns: ["1fr", "1fr", "1fr 1fr"],
});

const Hero: React.FC = () => {
  return (
    <div css={styledHero}>
      <div css={{ width: "100%" }}>
        <img
        alt=""
          css={{ width: "100%", height: "100%", objectFit: "cover" }}
          src="https://images.unsplash.com/photo-1644982647844-5ee1bdc5b114?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
        />
      </div>
      <div
        css={{
          backgroundColor: darkBlue,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "2rem 1.5rem",
        }}
      >
        <h2
          css={{
            padding: 0,
            margin: 0,
            fontSize: "40px",
            fontWeight: 900,
            color: beige,
            textAlign: "left"
          }}
        >
          THE ULTIMATE SHAVE
        </h2>
        <Text>No subscription required.</Text>
        <MainButton>Buy for $18</MainButton>
      </div>
    </div>
  );
};

export default Hero;
