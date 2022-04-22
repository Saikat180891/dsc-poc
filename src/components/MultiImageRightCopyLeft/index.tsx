import ImageRightCopyLeft from "../ImageLeftCopyRight";
import Image from "../Image";
import React from "react";

const MultiImageRightCopyLeft: React.FC<any> = ({ data }) => {
  return (
    <>
      <div css={{ padding: "0 5vh" }}>
        {Array.isArray(data) && data.map((ircl: any, i: number) => (
          <ImageRightCopyLeft
            key={i}
            invert={ircl?.fields?.invert}
            left={<Image src={ircl?.fields?.image?.fields?.file?.url} />}
            right={<div>{ircl?.fields?.caption}</div>}
          />
        ))}
      </div>
    </>
  );
};

export default MultiImageRightCopyLeft;
