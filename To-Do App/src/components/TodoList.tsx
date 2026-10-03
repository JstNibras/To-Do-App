import TodoItem from "./TodoItem"
import type { Todo } from "../types/todo"

interface TodoListProps {
    todos: Todo[];
    onEdit: (todo: Todo) => void;
    onDelete: (id: number) => void;
    onToggle: (id: number) => void;
}

function TodoList({
    todos,
    onEdit,
    onDelete,
    onToggle
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
                />
            ))}
        </div>
    )
}

export default TodoList;