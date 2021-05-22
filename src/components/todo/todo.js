import React from 'react';

const Todo = ({todos, name, setTodos, idx, todoObj}) => {

    const deleteTodo = () => {
        setTodos(todos.filter((item) => item.id !== todoObj.id))
    };
    const doneHandler = () => {
        setTodos(todos.map ((todo) => todo.id === todoObj.id ? {...todo, isActive: !todo.isActive} : todo))
    };
    const importantHandler = () => {
        setTodos(todos.map((todo) => todo.id === todoObj.id ? {...todo, isImportant: !todo.isImportant} : todo))
    };
    const saveEditHandler = (e) => {
        e.preventDefault();
        setTodos(todos.map((todo) => todo.id === todoObj.id ? {...todo,todoName: e.target.children[0].value} : todo));
        e.target.classList.remove('active')
    };
    const openEditForm = () => {
      Array.from(document.getElementsByClassName('edit-form')).map((el,elIdx) => {
          return idx === elIdx ? el.classList.add('active') : el
      })
    };

    return (
        <li className='todo-item'>
            <p className={`todo-name ${todoObj.isActive ? '' : 'done'} ${todoObj.isImportant ? 'important' : ''}`}>{name}</p>
            <form className={'edit-form'} onSubmit={saveEditHandler}>
                <input type="text" placeholder={name} defaultValue={name}/>
                <button type='submit'>Save</button>
            </form>
            <div>
                <button type='button' className='btn btn-outline-secondary' onClick={openEditForm}>Edit</button>
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

