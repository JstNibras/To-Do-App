import TodoItem from "./TodoItem"

function TodoList(){
    return (
        <div className="todo-list">

            <TodoItem
                task="Learn JSX"
                deadline="Today"
                status="Pending"
            />

            <TodoItem
                task="Practice Components"
                deadline="Tomorrow"
                status="Pending"
            />

            <TodoItem
                task="Build Todo UI"
                deadline="Friday"
                status="Completed"
            />

        </div>
    )
}

export default TodoList;