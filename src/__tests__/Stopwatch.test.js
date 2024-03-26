import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Stopwatch from '../components/Stopwatch';
import store from "../store/store";

test("clicking the start button starts the timer", async () => {
  render(
    <Provider store={store}>
      <Stopwatch />
    </Provider>
  );

  const startBttn = screen.getByText("Start");
  fireEvent.click(startBttn);

  await new Promise(resolve => setTimeout(resolve, 2000));

  const timeDisplay = screen.getByTestId("time-display");
  expect(timeDisplay.textContent).not.toBe("Time: 00:00");
});

test("clicking the pause button pauses the timer", () => {
  render(<Provider store={store}>
    <Stopwatch />
  </Provider>);

  const pauseBttn = screen.getByText("Pause");
  fireEvent.click(pauseBttn);
});

test("clicking the reset button resets the timer", () => {
  render(<Provider store={store}>
    <Stopwatch />
  </Provider>);

  const resetBttn = screen.getByText("Reset");
  fireEvent.click(resetBttn);

  const resetTime = screen.getByTestId("time-display");
  expect(resetTime.textContent).toBe("Time: 00:00");
});