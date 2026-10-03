import { useEffect, useRef, useState } from "react";

interface TodoFormProps {
    onAddTodo: (
        title: string,
        deadline: string
    ) => void;
    onUpdateTodo: (
        id: number,
        title:string,
        deadline: string
    ) => void;
    editingTodo: {
        id: number;
        title: string;
        deadline: string;
    } | null;
    onCancelEdit: () => void;
}

function TodoForm({onAddTodo, onUpdateTodo, editingTodo, onCancelEdit}: TodoFormProps){

    const [title, setTitle] = useState("")
    const [deadline, setDeadline] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (editingTodo) {
            setTitle(editingTodo.title)
            setDeadline(editingTodo.deadline)

            inputRef.current?.focus()
        }
    }, [editingTodo]);

    const handleSubmit = (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();

        const trimmedTitle = title.trim()

        if(!trimmedTitle || !deadline) {
            return;
        }

        if (editingTodo) {
            onUpdateTodo(
                editingTodo.id,
                trimmedTitle,
                deadline
            )
        } else {
            onAddTodo(trimmedTitle, deadline)
        }

        setTitle("")
        setDeadline("")

        inputRef.current?.focus();
    }

    const handleCancel = () => {
        setTitle("");
        setDeadline("");
        onCancelEdit();

        inputRef.current?.focus();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                ref={inputRef}
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
                {editingTodo ? "Update Task" : "Add Task"}
            </button>

            { editingTodo && (
                <button type="button" onClick={handleCancel}>Cancel</button>
            )}

        </form>
    )
}

export default TodoForm;