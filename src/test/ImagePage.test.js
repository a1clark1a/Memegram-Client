import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import ImagePage from "../ImagePage/ImagePage";

describe("Image Page Component", () => {
  it("renders with no error", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ImagePage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
