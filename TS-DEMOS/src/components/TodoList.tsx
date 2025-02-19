
import { useState } from "react";

interface TodoItem {
  id: number;
  title: string;
  completed: boolean;
}

const TodoList = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

  const addNewTodo = () => {
    if (newTodo.trim() === " ") return;
    const newTask: TodoItem = {
      id: Date.now(),
      title: newTodo,
      completed: false,
    };
    setTodos([...todos, newTask]);
    setNewTodo("");
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={addNewTodo}>Add</button>
      <ul>
        {todos.map((item) => (
          <li
            key={item.id}
            onClick={() => toggleTodo(item.id)}
            style={{
              cursor: "pointer",
              textDecoration: item.completed ? "line-through" : "none",
            }}
          >
            {item.title} {item.completed ? "✔️" : "❌"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
