import React from "react";
import {mq} from "../../device";

interface Props {
  left: React.ReactNode;
  right: React.ReactNode;
  invert?: boolean;
  className?: string;
}

const styledGrid = mq({
  display: "grid",
  gridTemplateColumns: ["1fr", "1fr 1fr"]
})

const ImageRightCopyLeft: React.FC<Props> = ({
  left,
  right,
  invert = false,
  className = ""
}) => {
  return (
    <section css={styledGrid} className={className}>
      {invert ? (
        <>
          <div>{right}</div>
          <div>{left}</div>
        </>
      ) : (
        <>
          <div>{left}</div>
          <div>{right}</div>
        </>
      )}
    </section>
  );
};

export default ImageRightCopyLeft;
