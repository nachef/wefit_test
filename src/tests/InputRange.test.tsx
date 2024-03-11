import { render, fireEvent } from "@testing-library/react";
import InputRange from "../components/InputRange";

test("increments value when plus button is clicked", () => {
  let value = 10; //valor maior que o permitido
  const onValueChange = (newValue: number) => {
    value = newValue;
  };

  const { getByAltText } = render(
    <InputRange value={value} onValueChange={onValueChange} />
  );
  const incrementButton = getByAltText("Increment");

  fireEvent.click(incrementButton);

  expect(value).toBe(5);
});

test("decrements value when minus button is clicked", () => {
  let value = 2;
  const onValueChange = (newValue: number) => {
    value = newValue;
  };

  const { getByAltText } = render(
    <InputRange value={value} onValueChange={onValueChange} />
  );
  const decrementButton = getByAltText("Decrement");

  fireEvent.click(decrementButton);

  expect(value).toBe(1);
});

test("does not increment value beyond 5", () => {
  let value = 5;
  const onValueChange = (newValue: number) => {
    value = newValue;
  };

  const { getByAltText } = render(
    <InputRange value={value} onValueChange={onValueChange} />
  );
  const incrementButton = getByAltText("Increment");

  fireEvent.click(incrementButton);

  expect(value).toBe(5);
});

test("does not decrement value below 1", () => {
  let value = 1;
  const onValueChange = (newValue: number) => {
    value = newValue;
  };

  const { getByAltText } = render(
    <InputRange value={value} onValueChange={onValueChange} />
  );
  const decrementButton = getByAltText("Decrement");

  fireEvent.click(decrementButton);

  expect(value).toBe(1);
});
