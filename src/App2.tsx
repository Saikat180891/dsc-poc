import React from "react";
import { throttle } from "lodash";

const App2 = () => {
  React.useEffect(() => {
    var canvas: any = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var video: any = document.getElementById("video");
    let interval: any;

    const handleScroll = (e: any) => {
      const h: number = e.target.scrollingElement.scrollHeight;
      const t: number = e.target.scrollingElement.scrollTop;
      const scrollPercent = (t / h) * 100;
      video.currentTime = Number((scrollPercent * video.duration) / 100);
      ctx.drawImage(video, 0, 0);
      interval = setInterval(() => video, 1000 / 24);
    };

    const throttledFn = throttle(handleScroll, 200);

    window.addEventListener("scroll", throttledFn);

    return () => {
      window.removeEventListener("scroll", throttledFn);
      clearInterval(interval);
    };
  }, []);

  return (
    <div style={{ height: "5000px" }}>
      <h3>Scroll to see the parallax effect</h3>
      <video
        id="video"
        width={0}
        height={0}
        src="/video2.mp4"
        controls
        autoPlay
        style={{ visibility: "hidden" }}
        muted
      ></video>
      <canvas
        id="canvas"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 10,
          border: "1px solid black",
          width: "100%",
          height: "100vh",
        }}
      ></canvas>
    </div>
  );
};

export default App2;
