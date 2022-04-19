import React from "react";

interface AspectRatioProps{
    ratio: string;
    children: React.ReactNode | string;
    css?: object;
}

const AspectRatio: React.FC<AspectRatioProps> = ({ children, ratio = "1 / 1" }) => {
  return <div css={{ aspectRatio: ratio }}>{children}</div>;
};

export default AspectRatio;
