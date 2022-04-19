import { dummy_image } from "../../app.constants";
import { mq } from "../../device";

const styledImageTiles = mq({
  display: "grid",
  gridTemplateColumns: ["repeat(2,1fr)", "repeat(2,1fr)","repeat(4, 1fr)"],
  gap: "1rem",
});

const ImageTiles = () => {
  return (
    <div css={styledImageTiles}>
      {[1, 2, 3, 4].map((_) => (
        <div css={{ display: "flex", flexDirection: "column" }}>
          <div css={{ width: "100%" }}>
            <img css={{ width: "100%", aspectRatio: "1 / 1" }} src={dummy_image} alt="" />
          </div>
          <p>Dummy Text</p>
        </div>
      ))}
    </div>
  );
};

export default ImageTiles;
