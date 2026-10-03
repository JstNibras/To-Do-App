import type { Todo } from "../types/todo";

interface TodoItemProps {
    todo: Todo;
    today: string;
    onToggle: (id: number) => void;
}

function TodoItem({
    todo,
    today,
    onToggle
}: TodoItemProps) {

    const overdue = !todo.completed && todo.deadline < today

    return (
        <div className="todo-item">

            <div>
                <h3>{todo.title}</h3>
                <p>Deadline: {todo.deadline}</p>
                <p>
                    Status:{" "}
                    {todo.completed ? "Completed" : overdue ? "Overdue" : "Pending"}
                </p>
            </div>

            <button onClick={() => onToggle(todo.id)}>
                {todo.completed
                ? "Completed"
                : "Mark Complete"}
            </button>

        </div> 
    )
}

export default TodoItem;