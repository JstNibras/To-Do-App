import TodoForm from "./TodoForm"
import TodoList from "./TodoList"
import Header from "./Header";


function TodoApp() {

    return (
        <div className="todo-app">
            <Header />

            <TodoForm />

            <TodoList />

        </div>
    )
}

export default TodoApp;