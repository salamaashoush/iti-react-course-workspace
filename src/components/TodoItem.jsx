export function TodoItem({ item, handleCompleteTodo,handleRemoveTodo }) {
  return (
    <li>
      <input
        type="checkbox"
        onChange={() => handleCompleteTodo(item.id)}
        checked={item.completed}
      />
      {item.title}
      <button onClick={() => handleRemoveTodo(item.id)}>X</button>
    </li>
  );
}