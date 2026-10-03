import type { Todo } from "../types/todo";

interface TodoItemProps {
    todo: Todo;
    onEdit: (todo: Todo) => void;
    onDelete: (id: number) => void;
    onToggle: (id: number) => void;
    currentTime: Date;
}

function TodoItem({
    todo,
    onEdit,
    onDelete,
    onToggle,
    currentTime
}: TodoItemProps) {

    const isOverdue = !todo.completed && currentTime.getTime() > new Date(todo.deadline).getTime()
        
    return (
        <div className="todo-item">

            <div>
                <h3>{todo.title}</h3>
                <p>Deadline: {todo.deadline}</p>
                <p>
                    Status:{" "}
                    {todo.completed ? "Completed" : isOverdue ? "Overdue" : "Pending"}
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