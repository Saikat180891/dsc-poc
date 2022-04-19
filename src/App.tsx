import React from "react";
import "./App.css";
import client from "./client";
import { jsx, css } from "@emotion/react";
import facepaint from "facepaint";
import styled from "@emotion/styled";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ImageTiles from "./components/ImageGallery";
import ImageRightCopyLeft from "./components/ImageLeftCopyRight";
import Image from "./components/Image";
import { dummy_image } from "./app.constants";
// import { CSSProp } from "styled-components";

// declare module "react" {
//   interface DOMAttributes<T> {
//     css?: CSSProp<any>;
//   }
// }

const breakpoints = [576, 768, 992, 1200];

const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));

const Button = styled.button`
  color: [ "green", "gray", "hotpink" ];
`;

function App() {
  React.useEffect(() => {
    client.getEntries({ content_type: "landingPage" }).then((data) => {
      console.log(data);
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero />
      <div css={{ padding: "2.5rem 2rem" }}>
        <ImageTiles />
      </div>
      <div css={{ padding: "0 5vh" }}>
        <ImageRightCopyLeft
          left={<Image src={dummy_image} />}
          right={<div>Hello</div>}
        />
      </div>
      <div css={{ padding: "0 5vh" }}>
        <ImageRightCopyLeft
          invert
          left={<Image src={dummy_image} />}
          right={<div>Hello</div>}
        />
      </div>
    </div>
  );
}

export default App;
