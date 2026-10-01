interface Todo{
    id: number;
    title: string;
    completed: boolean;
}

interface TodoItmProps {
    todo: Todo
}

function TodoItem({ todo }: TodoItmProps) {
    return (
        <li>{todo.title}</li>
    )
}

export default TodoItem;