import React, { useState } from "react";
import { useTodoList } from "../hooks";
import { TodoItem } from './TodoItem';

export function TodoList() {
  const [todoInputValue, setTodoInputValue] = useState("");
  const todoService = useTodoList();

  return todoService.loading ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      <label htmlFor="todo-input">Todo</label>
      <input
        id="todo-input"
        className="input"
        style={{ backgroundColor: "yellow" }}
        type="text"
        value={todoInputValue}
        onChange={(e) => setTodoInputValue( e.target.value )}
      />
      <button
        onClick={() =>{
          todoService.addTodo({
            id: Math.random(),
            title:todoInputValue,
            completed: false,
          })
          setTodoInputValue("")
        }
        }
      >
        Add
      </button>
      <ul>
        {todoService.todos.map((item) => (
          <TodoItem
            key={item.id}
            item={item}
            handleRemoveTodo={todoService.completeTodo}
            handleCompleteTodo={todoService.completeTodo}
          ></TodoItem>
        ))}
      </ul>
    </div>
  );
}