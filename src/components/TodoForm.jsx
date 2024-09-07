import { useState } from 'react'
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { toast } from 'react-hot-toast' 

export default function TodoForm({ onAddTodo }) {
  const [text, setText] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (text.trim().length < 3) {
      toast.error("Todo harus memiliki minimal 3 karakter.") 
      return
    }

    setError("")

    onAddTodo({ id: Date.now(), text, completed: false })
    setText("")
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <div className="flex items-center space-x-4">
        <Input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add new todo"
          className="flex-1 dark:text-white"
        />
        <Button type="submit">Add</Button>
      </div>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  )
}
