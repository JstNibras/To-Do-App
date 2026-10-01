import TodoForm from "./TodoForm"
import TodoList from "./TodoList"

function TodoApp(){
    return (
        <div>
            <h1>
                Todo Application
            </h1>

            <TodoForm />
            <TodoList />
        </div>
    );
}

export default TodoApp;