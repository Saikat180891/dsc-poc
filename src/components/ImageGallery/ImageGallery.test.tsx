import React from "react";
import ImageTiles from ".";
import { render, screen } from "@testing-library/react";

const data = [
  {
    fileds: {
      image: {
        fields: {
          file: {
            url: "this is a url",
          },
          caption: "Image",
        },
      },
    },
  },
];

window.optimizely = window.optimizely || {};
window.optimizely.get = function (arg: string) {
  return {
    getVariationMap: function () {
      return {};
    },
  };
};

const data2 = [
  {
    fileds: {
      image: {
        fields: {
          file: {
            url: "this is a url",
          },
          caption: "Image",
        },
      },
    },
  },
  {
    fileds: {
      image: {
        fields: {
          file: {
            url: "this is a url",
          },
          caption: "Image",
        },
      },
    },
  },
  {
    fileds: {
      image: {
        fields: {
          file: {
            url: "this is a url",
          },
          caption: "Image",
        },
      },
    },
  },
  {
    fileds: {
      image: {
        fields: {
          file: {
            url: "this is a url",
          },
          caption: "Image",
        },
      },
    },
  },
];

describe("testing image gallery", () => {
  it("renders an image element", () => {
    render(<ImageTiles data={data} />);
    const imgElement = screen.getByRole("img");
    expect(imgElement).toBeTruthy();
  });

  it("renders 4 image element", () => {
    render(<ImageTiles data={data2} />);
    const imgElement = screen.getAllByRole("img");
    expect(imgElement.length).toBe(4);
  });
});
