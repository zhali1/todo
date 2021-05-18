import React from 'react';

const Todo = ({todos, name, setTodos, todoObj}) => {

    const deleteTodo = () => {
        setTodos(todos.filter((item) => item.id !== todoObj.id))
    };
    const doneHandler = () => {
        setTodos(todos.map ((todo) => todo.id === todoObj.id ? {...todo, isActive: !todo.isActive} : todo))
    };
    const importantHandler = () => {
        setTodos(todos.map((todo) => todo.id === todoObj.id ? {...todo, isImportant: !todo.isImportant} : todo))
    };

    return (
        <li className='todo-item'>
            <p className={`todo-name ${todoObj.isActive ? '' : 'done'} ${todoObj.isImportant ? 'important' : ''}`}>{name}</p>
            <div>
                <button type='button' className={`btn btn-outline-success ${todoObj.isActive ? '' : 'active'} `}
                        onClick={doneHandler}>Done
                </button>
                <button type='button' className={`btn btn-outline-warning ${todoObj.isImportant ? 'active' : ''} `}
                        onClick={importantHandler}>Important
                </button>
                <button type='button' className={`btn btn-outline-danger`} onClick={deleteTodo}>Delete</button>
            </div>
        </li>
    );
};

export default Todo;

