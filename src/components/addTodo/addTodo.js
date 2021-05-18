import React from 'react';

const AddTodo = ({setTodos, todos, inputText, setInputText}) => {
    const formHandler = (e) => {
        e.preventDefault();
        setTodos([...todos, {
            todoName: inputText,
            isActive: true,
            isImportant: false,
            id: Math.round(Math.random() * 1000)
        }]);
        setInputText('')
    };
    return (
        <form action="" className='add-todo-form' onSubmit = {formHandler}>
            <input type="text" placeholder='What needs to be done' required value={inputText} onChange={(e) => {
                setInputText(e.target.value)
            }} />
            <button type='submit'>Add Todo</button>
        </form>
    );
};

export default AddTodo;