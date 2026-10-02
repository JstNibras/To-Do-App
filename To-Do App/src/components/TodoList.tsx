import TodoItem from "./TodoItem"
import type { Todo } from "./TodoApp"

interface TodoListProps {
    todos: Todo[];
    onToggleTodo: (id: number) => void;
}

function TodoList({
    todos,
    onToggleTodo
}: TodoListProps){
    return (
        <div className="todo-list">
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={onToggleTodo}
                />
            ))}
        </div>
    )
}

export default TodoList;