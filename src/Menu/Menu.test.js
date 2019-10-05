// hello.test.js

import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Menu from "./Menu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders Menu with Menu items", () => {
  act(() => {
    render(<Router><Menu /></Router>, container);
  });
  expect(container.textContent).toContain("Help");
  expect(container.textContent).toContain("Home");
  expect(container.textContent).toContain("List");
  expect(container.textContent).toContain("Log in");
});

it("renders Menu - initial state without ", () => {
  act(() => {
    render(<Router><Menu /></Router>, container);
  });
  expect(container.textContent).not.toContain("Log out");
  expect(container.textContent).not.toContain("Hello");
});