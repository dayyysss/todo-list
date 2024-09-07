import TodoItem from './TodoItem'

export default function TodoList({ todos, handleEditClick, handleDeleteClick, handleToggleClick }) {
  return (
    <ul className="max-h-64 overflow-y-auto pr-4">
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
