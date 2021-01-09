import React from "react";
import { within, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

describe("App", () => {
  beforeEach(() => {
    render(<App />);
  });

  it("renders a heading", () => {
    expect(screen.getByRole("heading")).toBeVisible();
  });
});
