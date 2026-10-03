import { useEffect, useState } from "react";

import TodoForm from "./TodoForm"
import TodoList from "./TodoList"
import type { Todo } from "../types/todo"
import Header from "./Header";

function TodoApp() {

    // const [todos, setTodos] = useState<Todo[]>(() => {
    //     const savedTodos = localStorage.getItem("todos");

    //     return savedTodos ? JSON.parse(savedTodos) : [];
    // });

    // const [today, setToday] = useState(() => {
    //     return new Date().toISOString().split("T")[0]
    // })

    // useEffect(() => {
    //     localStorage.setItem("todos", JSON.stringify(todos))
    // }, [todos])

    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         setToday(new Date().toISOString().split("T")[0]);
    //     }, 60 * 1000);

    //     return () => {
    //         clearInterval(intervalId);
    //     };
    // }, []);

    // const overdueTodos = todos.filter(
    //     todo => !todo.completed && todo.deadline < today
    // )

    // const overdueCount = overdueTodos.length

    // useEffect(() => {
    // document.title =
    //     overdueCount > 0
    //         ? `Todo App (${overdueCount} overdue)`
    //         : "Todo App";
    // }, [overdueCount]);

    // const addTodo = (
    //     title: string,
    //     deadline: string
    // ) => {
    //     const newTodo: Todo = {
    //         id: Date.now(),
    //         title,
    //         deadline,
    //         completed: false
    //     }
    //     setTodos(prev => [...prev, newTodo])
    // }

    // const toggleTodo = (id: number) => {
    //     setTodos(prev =>
    //     prev.map(todo =>
    //         todo.id === id
    //         ? {
    //             ...todo,
    //             completed: !todo.completed
    //             }
    //         : todo
    //     )
    //     );
    // };

    const [todos, setTodos] = useState<Todo[]>([])

    const [editingTodo, setEditingTodo] = useState<Todo | null>(null)

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

    const updateTodo = (
        id: number,
        title: string,
        deadline: string
    ) => {
        setTodos(prev => 
            prev.map(todo =>
                todo.id === id
                    ? {
                        ...todo,
                        title,
                        deadline
                    }
                : todo
            )
        )
        setEditingTodo(null)
    }


    const deleteTodo = (id: number) => {
        setTodos(prev =>
            prev.filter(todo => todo.id !== id)
        )
    }

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

            <p>Total Tasks : {todos.length}</p>

            <TodoForm 
                onAddTodo={addTodo}
                onUpdateTodo={updateTodo}
                editingTodo={editingTodo}
                onCancelEdit={() => setEditingTodo(null)}
            />

            <TodoList
                todos={todos}
                onEdit={setEditingTodo}
                onDelete={deleteTodo}
                onToggle={toggleTodo}
            />

        </div>
    )
}

export default TodoApp;