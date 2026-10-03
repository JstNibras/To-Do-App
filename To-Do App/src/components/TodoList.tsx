import TodoItem from "./TodoItem"
import type { Todo } from "../types/todo"

interface TodoListProps {
    todos: Todo[];
    today: string;
    onToggleTodo: (id: number) => void;
}

function TodoList({
    todos,
    today,
    onToggleTodo
}: TodoListProps){
    return (
        <div className="todo-list">
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    today={today}
                    onToggle={onToggleTodo}
                />
            ))}
        </div>
    )
}

export default TodoList;