interface TodoItemProps {
    task: string;
    deadline: string;
    status: string;
}

function TodoItem({
    task, deadline, status
}: TodoItemProps) {
    return (
        <div className="todo-item">

            <div className="task">
                <h3>{task}</h3>
            </div>

            <div className="deadline">
                {deadline}
            </div>

            <div className="status">
                {status}
            </div>

            <div className="actions">
                <button>Edit</button>
                <button>Delete</button>
            </div>

        </div> 
    )
}

export default TodoItem;