import { useEffect, useState } from "react";

import TodoForm from "./TodoForm"
import TodoList from "./TodoList"
import type { Todo } from "../types/todo"
import Header from "./Header";

function TodoApp() {

    const [todos, setTodos] = useState<Todo[]>(() => {
        const savedTodos = localStorage.getItem("todos");

        return savedTodos ? JSON.parse(savedTodos) : [];
    });

    const [today, setToday] = useState(() => {
        return new Date().toISOString().split("T")[0]
    })

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    useEffect(() => {
        const intervalId = setInterval(() => {
            setToday(new Date().toISOString().split("T")[0]
        }, 60 * 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    const overdueTodos = todos.filter(
        todo => !todo.completed && todo.deadline < today
    )

    const overdueCount = overdueTodos.length

    useEffect(() => {
        document.title = `Todo App (${overdueCount} overdue)`
    })

    const addTodo = (
        title: string,
        deadline: string
    ) => {
        const newTodo: Todo = {
            id: Date.now(),
            title,
            deadline,
            completed: false
        }
        setTodos(prev => [...prev, newTodo])
    }

    return (
        <div className="todo-app">
            <Header />

            <p>Overdue Tasks : {overdueCount}</p>

            <TodoForm onAddTodo={addTodo}/>

            <TodoList todos={todos} />

        </div>
    )
}

export default TodoApp;