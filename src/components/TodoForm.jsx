import { useState } from 'react'
import { Button } from "./ui/button"
import { Input } from "./ui/input"

export default function TodoForm({ onAddTodo }) {
  const [text, setText] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    onAddTodo({ id: Date.now(), text, completed: false })
    setText("")
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-4">
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add new todo"
        className="flex-1 dark:text-white"
      />
      <Button type="submit">Add</Button>
    </form>
  )
}
