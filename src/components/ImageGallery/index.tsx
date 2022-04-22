import { mq } from "../../device";

const styledImageTiles = mq({
  display: "grid",
  gridTemplateColumns: ["repeat(2,1fr)", "repeat(2,1fr)","repeat(4, 1fr)"],
  gap: "1rem",
});

const ImageTiles:React.FC<any> = ({data}) => {
  return (
    <div css={styledImageTiles}>
      {Array.isArray(data) && data?.map((product:any, i:number) => (
        <div css={{ display: "flex", flexDirection: "column" }} key={i}>
          <div css={{ width: "100%" }}>
            <img css={{ width: "100%", aspectRatio: "1 / 1" }} src={product?.fields?.image?.fields?.file?.url} alt="" />
          </div>
          <p>{product?.fields?.caption}</p>
        </div>
      ))}
    </div>
  );
};

export default ImageTiles;
