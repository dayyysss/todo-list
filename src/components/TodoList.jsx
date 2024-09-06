import TodoItem from './TodoItem'

export default function TodoList({ todos, handleEditClick, handleDeleteClick, handleToggleClick }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onEdit={handleEditClick}
          onDelete={handleDeleteClick}
          onToggle={handleToggleClick}
        />
      ))}
    </ul>
  )
}
