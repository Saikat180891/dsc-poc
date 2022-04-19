import React from "react";

interface ImageProps {
  src: string;
  alt?: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, ...props }) => {
    console.log(props)
  return <img css={{width: "100%"}} src={src} alt={alt} />;
};

export default Image;
