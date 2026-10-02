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
            title: title,
            completed: false
        };

    setTodos(prev => [...prev, newTodo]);
    };

    return (
        <div className="todo-app">
            <Header />

            <TodoForm />

            <TodoList />

        </div>
    )
}

export default TodoApp;