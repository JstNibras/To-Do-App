import { useState } from "react";

interface TodoFormProps {
    onAddTodo: (title: string) => void;
}

function TodoForm({onAddTodo}: TodoFormProps){

    const [title, setTitle] = useState("")

    const handleSubmit = (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();

        const trimmedTitle = title.trim()

        if(!trimmedTitle) {
            return;
        }

        onAddTodo(trimmedTitle)

        setTitle("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}    
            />

            <button type="submit">
                Add Task
            </button>

        </form>
    )
}

export default TodoForm;