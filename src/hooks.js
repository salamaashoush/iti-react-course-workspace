import { useEffect, useState } from "react";

export function useTodoList() {
  const [todos, setTodos] = useState([
    { id: 1, title: "new item", completed: false },
  ]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        setTodos(json);
        setLoading(false);
      });
  }, [setTodos]);

  const completeTodo = (id) => {
    setTodos(
      todos.map((t) => {
        if (t.id === id) {
          return { ...t, completed: !t.completed };
        }
        return t;
      })
    );
  };

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  return {
    loading,
    todos,
    addTodo,
    removeTodo,
    completeTodo,
  };
}
