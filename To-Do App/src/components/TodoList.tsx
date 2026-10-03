import TodoItem from "./TodoItem"
import type { Todo } from "../types/todo"

interface TodoListProps {
    todos: Todo[];
    onEdit: (todo: Todo) => void;
    onDelete: (id: number) => void;
    onToggle: (id: number) => void;
    currentTime: Date;
}

function TodoList({
    todos,
    onEdit,
    onDelete,
    onToggle,
    currentTime
}: TodoListProps){
    return (
        <div className="todo-list">
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onEdit={onEdit}
                    onDelete={onDelete}
                    onToggle={onToggle}
                    currentTime={currentTime}
                />
            ))}
        </div>
    )
}

export default TodoList;