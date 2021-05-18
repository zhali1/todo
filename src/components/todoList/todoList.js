import React from 'react';
import Todo from "../todo";

const TodoList = ({todos, setTodos}) => {
    return (
        <ul>
            {todos.map((todo) => {
                return <Todo
                    setTodos={setTodos}
                    name={todo.todoName}
                    todos = {todos}
                    key={todo.id}
                    todoObj={todo}
                />
            })}
        </ul>
    );
};

export default TodoList;