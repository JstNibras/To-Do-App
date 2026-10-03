import { useEffect, useRef, useState } from "react";

import { toast } from "react-toastify";

import TodoForm from "./TodoForm"
import TodoList from "./TodoList"
import type { Todo } from "../types/todo"
import Header from "./Header";

function TodoApp() {

    const [todos, setTodos] = useState<Todo[]>([])

    const [editingTodo, setEditingTodo] = useState<Todo | null>(null)

    const [currentTime, setCurrentTime] = useState(() => new Date())

    const notifiedOverdueIds = useRef<Set<number>>(new Set())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date())
        }, 1000)
        return () => {
            clearInterval(intervalId)
        }
    }, [])

    useEffect(() => {
        todos.forEach(todo => {
            const deadlineTime = new Date(todo.deadline).getTime();

            const isOverdue = !todo.completed && currentTime.getTime() > deadlineTime

            if(isOverdue && !notifiedOverdueIds.current.has(todo.id)){
                toast.warning(`"${todo.title}" is overdue`)
            }

            notifiedOverdueIds.current.add(todo.id)
        })
    }, [todos, currentTime])

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
        notifiedOverdueIds.current.delete(id)
        setEditingTodo(null)
    }


    const deleteTodo = (id: number) => {
        setTodos(prev =>
            prev.filter(todo => todo.id !== id)
        )
        notifiedOverdueIds.current.delete(id)
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
                currentTime={currentTime}
            />

        </div>
    )
}

export default TodoApp;