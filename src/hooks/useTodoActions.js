import { useState } from 'react';
import { toast } from 'react-hot-toast';

export default function useTodoActions() {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(null);

  const handleAddTodo = (todo) => {
    setTodos([...todos, todo]);
    toast.success('Todo added successfully!');
  };

  const handleEditClick = (id, newText) => {
    if (newText) {
      toast.promise(
        new Promise((resolve, reject) => {
          setTimeout(() => {
            setTodos(todos.map(todo => todo.id === id ? { ...todo, text: newText } : todo));
            resolve();
          }, 1000); // Simulasi delay jika diperlukan
        }),
        {
          loading: 'Editing todo...',
          success: 'Todo edited successfully!',
          error: 'Failed to edit todo.'
        }
      );
    } else {
      toast.error('Edit cancelled.');
    }
  };

  const handleDeleteClick = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
    toast.success('Todo deleted successfully!');
  };

  const handleToggleClick = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    toast.success('Todo status updated!');
  };

  return {
    todos,
    error,
    handleAddTodo,
    handleEditClick,
    handleDeleteClick,
    handleToggleClick
  };
}
