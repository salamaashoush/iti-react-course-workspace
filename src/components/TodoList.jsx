import React, { Children, useState } from "react";
import { useTodoList } from "../hooks";

export function TodoList({ children }) {
  console.log(children);
  const [todoInputValue, setTodoInputValue] = useState("");
  const todoService = useTodoList();
  const header = Children.toArray(children).find(
    (c) => c.props.id === "header"
  );
  const body = Children.toArray(children).find((c) => c.props.id === "body");

  const footer = Children.toArray(children).find(
    (c) => c.props.id === "footer"
  );

  return (
    <div>
      <button>Close</button>
      {header}
      {body}
      {footer}
    </div>
  );
}
