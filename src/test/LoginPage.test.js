import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import LoginPage from "../LoginPage/LoginPage";

describe("Image Page Component", () => {
  it("renders with no error", () => {
    const div = document.createElement("div");
    ReactDOM.render(<LoginPage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
