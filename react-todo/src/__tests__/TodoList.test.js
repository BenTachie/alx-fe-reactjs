import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

// --- INITIAL RENDER ---
test("renders TodoList with initial todos", () => {
  render(<TodoList />);
  expect(screen.getByText("Learn React")).toBeInTheDocument();
  expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
});

// --- ADD TODO ---
test("adds a new todo item", () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText("Add todo");
  const button = screen.getByText("Add");

  fireEvent.change(input, { target: { value: "New Task" } });
  fireEvent.click(button);

  expect(screen.getByText("New Task")).toBeInTheDocument();
});

// --- TOGGLE TODO ---
test("toggles a todo item between completed and not completed", () => {
  render(<TodoList />);
  const todoItem = screen.getByText("Learn React");

  fireEvent.click(todoItem);
  expect(todoItem).toHaveStyle("text-decoration: line-through");

  fireEvent.click(todoItem);
  expect(todoItem).not.toHaveStyle("text-decoration: line-through");
});

// --- DELETE TODO ---
test("deletes a todo item", () => {
  render(<TodoList />);
  const todoItem = screen.getByText("Learn React");
  const deleteButton = screen.getByLabelText(`delete-1`);

  fireEvent.click(deleteButton);
  expect(todoItem).not.toBeInTheDocument();
});
s