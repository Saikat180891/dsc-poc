export const grid = (
  row: number = 1,
  col: number = 1,
  gap: string = "1rem"
) => {
  return {
    display: "grid",
    gridTemplateColumns: `repeat(${col}, 1fr)`,
    gridTemplateRows: `repeat(${row}, 1fr)`,
    gap: gap,
  };
};
