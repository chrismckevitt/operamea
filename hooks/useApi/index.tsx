import { useState } from 'react';

import { IPartialTodo } from '../../types/api';
import { DELETE, POST, PATCH } from '../../constants/methods';

const useApi = () => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const response = await fetch('/api/todos');
    const data = await response.json();
    setTodos(data);
  };

  const deleteTodo = async (id: number) => {
    const response = await fetch(`/api/todos/${id}`, {
      method: DELETE,
    });
    const data = await response.json();
    setTodos(data);
  };

  const addTodo = async (newTodo: IPartialTodo, reset: () => void) => {
    const response = await fetch('/api/todos', {
      method: POST,
      body: JSON.stringify(newTodo),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    setTodos(data);
    // Reset form values
    reset();
  };

  const toggleTodoComplete = async (id: number) => {
    const response = await fetch(`/api/todos/${id}`, {
      method: PATCH,
    });
    const data = await response.json();
    setTodos(data);
  };

  return {
    todos,
    fetchTodos,
    deleteTodo,
    addTodo,
    toggleTodoComplete,
  };
};

export default useApi;
