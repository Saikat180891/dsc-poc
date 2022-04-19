import React from "react";
import "./App.css";
import client from "./client";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ImageTiles from "./components/ImageGallery";
import ImageRightCopyLeft from "./components/ImageLeftCopyRight";
import Image from "./components/Image";
import { dummy_image } from "./app.constants";

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
