import { useState } from 'react'

export default function useTodoActions() {
  const [todos, setTodos] = useState([])
  const [error, setError] = useState(null)

  const handleAddTodo = (todo) => {
    setTodos([...todos, todo])
  }

  const handleEditClick = (id, newText) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, text: newText } : todo))
  }

  const handleDeleteClick = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const handleToggleClick = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
  }

  return {
    todos,
    error,
    handleAddTodo,
    handleEditClick,
    handleDeleteClick,
    handleToggleClick
  }
}
