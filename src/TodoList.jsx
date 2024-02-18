import { TodoItem } from "./TodoItem";

export function TodoList({todos, toggleTodo, deleteTodo}){
    return (
        <>
        <h1 className="header">Todo List</h1>
        {todos.length === 0 && "No todos"}
        <ul className="list">
            {todos.map(todo => {
                return (<TodoItem {...todo} key={todo.id} 
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                    ></TodoItem>)
            })}
        </ul>
        </>
    );
}