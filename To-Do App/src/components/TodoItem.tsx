import type { Todo } from "../types/todo";

interface TodoItemProps {
    todo: Todo;
    onEdit: (todo: Todo) => void;
    onDelete: (id: number) => void;
    onToggle: (id: number) => void;
}

function TodoItem({
    todo,
    onEdit,
    onDelete,
    onToggle
}: TodoItemProps) {
    return (
        <div className="todo-item">

            <div>
                <h3>{todo.title}</h3>
                <p>Deadline: {todo.deadline}</p>
                <p>
                    Status:{" "}
                    {todo.completed ? "Completed" : "Pending"}
                </p>
            </div>

            <div className="actions">
                <button onClick={() => onToggle(todo.id)}>
                    {todo.completed
                    ? "Mark Pending"
                    : "Complete"}
                </button>
                <button onClick={() => onEdit(todo)}>Edit</button>
                <button onClick={() => onDelete(todo.id)}>Delete</button>
            </div>

        </div> 
    )
}

export default TodoItem;