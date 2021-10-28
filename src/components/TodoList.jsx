import React, { useEffect } from 'react';
import TodoItem from './TodoItem';

export default function TodoList() {
  const todos = [];

  useEffect(() => {}, []);

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} id={todo.id} value={todo.value} complete={todo.complete} />
      ))}
    </ul>
  );
}