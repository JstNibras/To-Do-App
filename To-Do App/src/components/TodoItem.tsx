import type { Todo } from "./TodoApp";

interface TodoItemProps {
    todo: Todo;
    onToggle: (id: number) => void
}

function TodoItem({
    todo, onToggle
}: TodoItemProps) {
    return (
        <div className="todo-item">

            <div>
                <h3>{todo.title}</h3>
                <p>
                    Status:{" "}
                    {todo.completed ? "Completed" : "Pending"}
                </p>
            </div>

            <button onClick={() => onToggle(todo.id)}>
                {todo.completed ? "Completed" : "Mark Complete"}
            </button>

        </div> 
    )
}

export default TodoItem;