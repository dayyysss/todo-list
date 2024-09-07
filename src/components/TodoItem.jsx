export default function TodoItem({ todo, onEdit, onDelete, onToggle }) {
  return (
    <li className={`flex justify-between mt-2 items-center ${todo.completed ? 'line-through text-gray-500 dark:text-gray-400' : ''}`}>
      <span className="text-gray-900 dark:text-gray-100">{todo.text}</span>
      <div className="space-x-2">
        <button
          className={`rounded-md p-2 text-white ${todo.completed ? 'bg-black dark:bg-gray-600' : 'bg-green-500'}`}
          onClick={() => onToggle(todo.id)}
        >
          {todo.completed ? 'Uncomplete' : 'Complete'}
        </button>
        <button
          className="bg-yellow-500 dark:bg-yellow-400 rounded-md p-2 text-white"
          onClick={() => onEdit(todo.id, prompt("Edit todo:", todo.text))}
        >
          Edit
        </button>
        <button className="bg-red-500 dark:bg-red-400 rounded-md p-2 text-white" onClick={() => onDelete(todo.id)}>
          Delete
        </button>
      </div>
    </li>
  )
}
