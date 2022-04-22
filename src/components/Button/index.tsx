import { beige, darkBlue } from "../../globalStyles/variables.style";
import { mq } from "../../device";

const styledButton = mq({
  width: "100%",
  height: "4rem",
  border: "none",
  backgroundColor: beige,
  color: darkBlue,
  fontSize: "22px",
  fontWeight: 600,
});

export const MainButton = ({ children }: any) => {
  return <button css={styledButton}>{children}</button>;
};
