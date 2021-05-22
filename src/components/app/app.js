import React, {useState, useEffect} from 'react';
import './app.css'
import Header from "../header";
import NavPanel from "../navPanel";
import TodoList from "../todoList";
import AddTodo from "../addTodo";


const App = () => {
    const [todos, setTodos] = useState([]);
    const [inputText, setInputText] = useState('');
    const [status, setStatus] = useState('all');
    const [searchInput, setSearchInput] = useState('');
    useEffect(() => {

    }, []);
    useEffect(() => {
       localStorage.setItem('todo', JSON.stringify(todos));
    }, [todos]);

    return (
        <div className='app'>
            <div className="app-container">
                <Header todos={todos}/>
                <NavPanel status={status} setStatus={setStatus} setSearchInput={setSearchInput}/>
                { todos.length === 0 ? <div className='mb-3 border p-3 text-center'>there should be your to do list</div> :
                <TodoList
                    setTodos={setTodos}
                    todos={todos}
                    status={status}
                    searchInput={searchInput}
                />}
                <AddTodo setTodos={setTodos} todos={todos} setInputText={setInputText} inputText={inputText}/>
            </div>
        </div>
    );
};

export default App;