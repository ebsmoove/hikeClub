import "regenerator-runtime/runtime";
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { waitForElementToBeRemoved } from "@testing-library/dom";
import "@testing-library/jest-dom/extend-expect"; // TODO: move to a config so called once
import { trailAttritubeFormEnums, uiEnums } from "./enums";
import { api } from "./services/index";
import App from "./App";
import mockApiResponse from "./services/mockApiResponse";

jest.mock("./components/trailMap/index.jsx", () => () => (
  <div data-testid="trail-map" />
));

describe("App", () => {
  beforeEach(() => {
    render(<App />);
  });
  describe("without trails state set", () => {
    it("renders a heading", () => {
      expect(screen.getByRole("heading")).toBeVisible();
    });

    it("renders form", () => {
      expect(
        screen.getByLabelText(trailAttritubeFormEnums.MAX_LENGTH_LABEL)
      ).toBeVisible();
    });

    it("shows trail listing instructions", () => {
      expect(
        screen.getByText(uiEnums.TRAIL_LISTING_INSTRUCTIONS_TITLE)
      ).toBeVisible();
    });

    it("shows trail map instructions", () => {
      expect(
        screen.getByText(uiEnums.TRAIL_MAP_INSTRUCTIONS_TITLE)
      ).toBeVisible();
    });
  });
  describe("after user clicks submit", () => {
    it("removes instructions and shows trail listing and map", async () => {
      api.getLioMapServer = jest.fn(() => mockApiResponse.features);
      const submitButton = screen.getByRole("button", { name: "Submit" });
      userEvent.click(submitButton);
      await waitForElementToBeRemoved(
        () => screen.getByText(uiEnums.TRAIL_LISTING_INSTRUCTIONS_TITLE),
        screen.getByText(uiEnums.TRAIL_MAP_INSTRUCTIONS_TITLE)
      );
      expect(
        screen.getByText(mockApiResponse.features[0].attributes.TRAIL_NAME)
      ).toBeVisible();
      expect(screen.getByTestId("trail-map")).toBeVisible();
    });
  });
});
