import React from "react";
import { MainButton as Button } from ".";
import { render, screen } from "@testing-library/react";

it("renders learn react button", () => {
  render(<Button>Click Me</Button>);
  const buttonElement = screen.getByText(/click me/i);
  expect(buttonElement).toBeInTheDocument();
});

it("renders learn react button with text", () => {
  render(<Button>Click Me</Button>);
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toBeInTheDocument();
});
