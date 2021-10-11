import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("input", () => {
  test("renders input tag", () => {
    render(<App />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
  });

  test("should be able to type in the input", () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText(/search/i);
    fireEvent.change(inputElement, { target: { value: "value" } });
    expect(inputElement.value).toBe("value");
  });
});

describe("cards", () => {
  test("renders collection of cards", () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText(/search/i);
    fireEvent.change(inputElement, { target: { value: "value" } });
    const sectionElement = screen.getByTestId("section");
    expect(sectionElement).toBeInTheDocument();
  });
});
