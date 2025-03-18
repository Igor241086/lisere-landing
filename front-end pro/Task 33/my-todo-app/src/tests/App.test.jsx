import React from "react";
import { test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

test("The page has a TODO title", () => {
  render(<App />);
  expect(screen.getByText(/TODO/i)).toBeInTheDocument();
});

test("The input field allows you to enter text and numbers", () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/Enter a task/i);
  fireEvent.change(input, { target: { value: "Test123" } });
  expect(input).toHaveValue("Test123");
});

test("An error appears when clicking 'Add' without text", async () => {
  render(<App />);
  const button = screen.getByText(/Add/i);

  fireEvent.click(button);

  expect(await screen.findByText((content, element) =>
    content && content.includes('The field cannot be empty')
  )).toBeInTheDocument();
});

test("After adding a task, it appears in the list", async () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/Enter a task/i);
  const button = screen.getByText(/Add/i);

  fireEvent.change(input, { target: { value: "New task" } });
  fireEvent.click(button);

  expect(await screen.findByText(/New task/i)).toBeInTheDocument();
});

test("Added tasks are saved in a list", async () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/Enter a task/i);
  const button = screen.getByText(/Add/i);

  fireEvent.change(input, { target: { value: "Task 1" } });
  fireEvent.click(button);

  fireEvent.change(input, { target: { value: "Task 2" } });
  fireEvent.click(button);

  expect(await screen.findByText(/Task 1/i)).toBeInTheDocument();
  expect(await screen.findByText(/Task 2/i)).toBeInTheDocument();
});
