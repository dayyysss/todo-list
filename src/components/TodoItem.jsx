import { Button } from "./ui/button"

export default function TodoItem({ todo, onEdit, onDelete, onToggle }) {
  return (
    <li className={`flex justify-between mt-2 items-center ${todo.completed ? 'line-through text-gray-500' : ''}`}>
      <span>{todo.text}</span>
      <div className="space-x-2">
        <button className="bg-green-500 rounded-md p-2 text-white" onClick={() => onToggle(todo.id)}>
          {todo.completed ? 'Uncomplete' : 'Complete'}
        </button>
        <button className="bg-yellow-500 rounded-md p-2 text-white" onClick={() => onEdit(todo.id, prompt("Edit todo:", todo.text))}>
          Edit
        </button>
        <Button variant="destructive" onClick={() => onDelete(todo.id)}>Delete</Button>
      </div>
    </li>
  )
}
