import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Counter from "./Counter";

describe("Counter", () => {
  it("initialize with default value", () => {
    const { getByTestId } = render(<Counter defaultValue={5} />);

    const valueNode = getByTestId("count");

    expect(valueNode).toHaveTextContent("5");
  });

  it("decrease the counter", async () => {
    const fn = jest.fn();
    const { getByText, getByTestId } = render(<Counter onChange={fn} />);
    const decreaseNode = getByText("-");
    const valueNode = getByTestId("count");

    expect(valueNode).toHaveTextContent("0");
    expect(fn).not.toBeCalled();
    fireEvent.click(decreaseNode);
    const nextValueNode = await waitForElement(() => getByTestId("count"));
    expect(nextValueNode).toHaveTextContent("-1");
    expect(fn).toBeCalled();
  });

  it("increase the counter", async () => {
    const fn = jest.fn();
    const { getByText, getByTestId } = render(<Counter onChange={fn} />);
    const increaseNode = getByText("+");
    const valueNode = getByTestId("count");

    expect(valueNode).toHaveTextContent("0");
    expect(fn).not.toBeCalled();
    fireEvent.click(increaseNode);
    const nextValueNode = await waitForElement(() => getByTestId("count"));
    expect(nextValueNode).toHaveTextContent("1");
    expect(fn).toBeCalled();
  });
});
