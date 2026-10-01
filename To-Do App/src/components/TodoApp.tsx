import TodoForm from "./TodoForm"
import TodoList from "./TodoList"

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

function TodoApp() {
    const todos: Todo[] = [
        {
            id: 1,
            title: "Learn React",
            completed: false
        },
        {
            id: 2,
            title: "Practice TypeScript",
            completed: false
        },
        {
            id: 3,
            title: "Practice TypeScript",
            completed: false
        }
    ]

    return (
        <div>
            <h1> ToDo Application</h1>

            <TodoForm />

            <TodoList todos={todos} />
        </div>
    )
}

export default TodoApp;