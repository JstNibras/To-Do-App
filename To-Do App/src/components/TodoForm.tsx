import { useState } from "react";

interface TodoFormProps {
    onAddTodo: (
        title: string,
        deadline: string
    ) => void;
}

function TodoForm({onAddTodo}: TodoFormProps){

    const [title, setTitle] = useState("")
    const [deadline, setDeadline] = useState("")

    const handleSubmit = (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();

        const trimmedTitle = title.trim()

        if(!trimmedTitle || !deadline) {
            return;
        }

        onAddTodo(trimmedTitle, deadline)

        setTitle("")
        setDeadline("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                placeholder="Enter task"    
            />

            <input 
                type="date"
                value={deadline}
                onChange={event => setDeadline(event.target.value)}
            />

            <button type="submit">
                Add Task
            </button>

        </form>
    )
}

export default TodoForm;