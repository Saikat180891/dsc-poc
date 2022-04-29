import React from "react";
import ImageLeftCopyRight from ".";
import { render, screen } from "@testing-library/react";

const data = {
    left: <div title="left">This is the left side</div>,
    right: <div title="right">This is the right side</div>,
    invert: false
}

describe("Testing ImageLeftCopyRight", () => {
    it("renders an div left element", () => {
        render(<ImageLeftCopyRight {...data} />);
        const el = screen.getByText("This is the left side");
        expect(el).toBeTruthy();
    });
    it("renders an div element right", () => {
        render(<ImageLeftCopyRight {...data} />);
        const el = screen.getByText("This is the right side");
        expect(el).toBeTruthy();
    });
    it("renders an element left first", () => {
        render(<ImageLeftCopyRight {...data} />);
        const el = screen.getAllByTitle("left");
        expect(el.length).toBe(1);
    });
});