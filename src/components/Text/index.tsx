import { mq } from "../../device";

const baseStyle = mq({
  padding: 0,
  margin: 0,
});

const styledText = mq({
  ...baseStyle,
  margin: "1rem 0 2.25rem 0",
  fontSize: "12px",
  color: "#ffffff",
});

const Text = ({ children }: any) => <p css={styledText}>{children}</p>;

export default Text;
