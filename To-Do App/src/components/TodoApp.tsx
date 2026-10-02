import { useState } from "react";

import TodoForm from "./TodoForm"
import TodoList from "./TodoList"
import Header from "./Header";

export interface Todo {
    id: number;
    title: string;
    // deadline: string;
    completed: boolean;
}

function TodoApp() {

    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodo = (title: string) => {
        const newTodo: Todo = {
            id: Date.now(),
            title,
            completed: false
        };

        setTodos(prev => [...prev, newTodo]);
    };

    const toggleTodo = (id: number) => {
        setTodos(prev => 
            prev.map(todo =>
                todo.id === id
                ? {
                    ...todo,
                    completed: !todo.completed
                }
                : todo
            )
        )
    }

    return (
        <div className="todo-app">
            <Header />

            <TodoForm onAddTodo={addTodo}/>

            <TodoList todos={todos} onToggleTodo={toggleTodo}/>

        </div>
    )
}

export default TodoApp;