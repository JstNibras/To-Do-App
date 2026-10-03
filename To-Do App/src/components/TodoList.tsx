import TodoItem from "./TodoItem"
import type { Todo } from "../types/todo"

interface TodoListProps {
    todos: Todo[];
}

function TodoList({
    todos,
}: TodoListProps){
    return (
        <div className="todo-list">
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                />
            ))}
        </div>
    )
}

export default TodoList;