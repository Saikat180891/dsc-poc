import React from "react";
import { darkBlue, beige } from "../../globalStyles/variables.style";
import { mq } from "../../device";
import { MainButton } from "../Button";
import Text from "../Text";


const styledHero = mq({
  display: "grid",
  gridTemplateColumns: ["1fr", "1fr", "1fr 1fr"],
});

const Hero: React.FC<any> = ({data}:any) => {
  return (
    <div css={styledHero}>
      <div css={{ width: "100%" }}>
        <img
        alt=""
          css={{ width: "100%", height: "100%", objectFit: "cover" }}
          src={data?.fields?.heroImage?.fields?.file?.url}
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
          {data?.fields?.title}
        </h2>
        <Text>{data?.fields?.subscriptionStatus}</Text>
        <MainButton>{data?.fields?.price}</MainButton>
      </div>
    </div>
  );
};

export default Hero;
