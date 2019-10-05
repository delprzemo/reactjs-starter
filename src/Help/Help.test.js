// hello.test.js
import React from "react";
import { unmountComponentAtNode } from "react-dom";
import {  render } from '@testing-library/react'
import Help from './Help'


jest.mock("./Square/Square", () => {
  return function DummySquare(props) {
    return (
      <div data-testid="square">
        here is square
      </div>
    );
  };
});

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
  const { getByText, findByText, container } = render(<Help match={{params: {id: 2}}}/>);
  expect(container.textContent).toContain("here is square");
});
