import { useState } from 'react'
import { showSuccessToast, showErrorToast } from '../components/Toast'

export default function useTodoActions() {
  const [todos, setTodos] = useState([])
  const [error, setError] = useState(null)

  const handleAddTodo = (todo) => {
    setTodos([...todos, todo])
    showSuccessToast('Todo added successfully!')
  }

  const handleEditClick = (id, newText) => {
    if (newText) {
      setTodos(todos.map(todo => todo.id === id ? { ...todo, text: newText } : todo))
      showSuccessToast('Todo edited successfully!')
    } else {
      showErrorToast('Edit cancelled.')
    }
  }

  const handleDeleteClick = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
    showSuccessToast('Todo deleted successfully!')
  }

  const handleToggleClick = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    showSuccessToast('Todo status updated!')
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
