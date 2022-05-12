/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import "./App.css";
import client from "./client";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ImageTiles from "./components/ImageGallery";
import MultiImageRightCopyLeft from "./components/MultiImageRightCopyLeft";

const usePageDetails = () => {
  const [sections, setSections] = React.useState<any>({});
  const fetchPageDetails = React.useCallback(async () => {
    try {
      const pageDetails = await client.getEntries({ content_type: "homePage" });
      const landingPage = await client.getEntries({content_type: "landingPage"});
      console.log("landing page", landingPage)

      setSections(pageDetails?.items?.[0]?.fields);
      console.log(pageDetails.items[0].fields);
    } catch (error) {
      console.error("An error has ocurred");
    }
  }, []);

  React.useEffect(() => {
    fetchPageDetails();
  }, []);

  return sections;
};

function App() {
  const sections = usePageDetails();

  return (
    <div className="App">
      <Header />
      <Hero data={sections.hero} />
      <div css={{ padding: "2.5rem 2rem" }}>
        <ImageTiles data={sections.productCarousel} />
      </div>
      <MultiImageRightCopyLeft data={sections.imageRightCopyLeft} />
    </div>
  );
}

export default App;
