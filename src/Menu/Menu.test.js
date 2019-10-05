// hello.test.js

import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { fireEvent } from '@testing-library/react'
import { act } from "react-dom/test-utils";
import Menu from "./Menu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// var axios = require('axios');
// var MockAdapter = require('axios-mock-adapter');
// var mock = new MockAdapter(axios);

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);

  // mock.onPost('https://reqres.in/api/login').reply(200, {
  //   token: "iasd932"
  // });
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

it("renders Menu - initial state without Log out and Hello", () => {
  act(() => {
    render(<Router><Menu /></Router>, container);
  });
  expect(container.textContent).not.toContain("Log out");
  expect(container.textContent).not.toContain("Hello");
});

it("renders Menu - initial state - Log in button disabled and validation hit", () => {
  act(() => {
    render(<Router><Menu /></Router>, container);
  });
  const logInDropdownButton = container.querySelector('.dropdown-toggle');
  const loginSubmitButton = container.querySelector("button[type='submit']");
  const emailField = container.querySelector("input[id='id_Email'");
  const passwordField = container.querySelector("input[id='id_Password'");

  fireEvent.click(logInDropdownButton);
  fireEvent.change(emailField, {
    target: { value: "test@test.pl" }
  });

  fireEvent.change(passwordField, {
    target: { value: "12345" }
  });

  expect(loginSubmitButton.classList.contains('disabled')).toBe(false);
  expect(container.textContent).not.toContain("Value cannot be empty");

  fireEvent.change(passwordField, {
    target: { value: "" }
  });

  expect(loginSubmitButton.classList.contains('disabled')).toBe(true);
  expect(container.textContent).toContain("Value cannot be empty");
});


// it("renders Menu - should log in and see Hello ", () => {

 

//   act(() => {
//     render(<Router><Menu /></Router>, container);
//   });

//   container.querySelector("summary").textContent

//   expect(container.textContent).toContain("Log out");
//   expect(container.textContent).toContain("Hello");
// });
