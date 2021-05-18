import React, {useState} from 'react';
import './app.css'
import Header from "../header";
import NavPanel from "../navPanel";
import TodoList from "../todoList";
import AddTodo from "../addTodo";

const App = () => {
    const [todos, setTodos] = useState([]);
    const [inputText, setInputText] = useState('');
    return (
        <div className='app'>
            <div className="app-container">
                <Header todos={todos} />
                <NavPanel/>
                <TodoList setTodos={setTodos} todos={todos} />
                <AddTodo setTodos={setTodos} todos={todos} setInputText={setInputText} inputText={inputText}/>
            </div>
        </div>
    );
};

export default App;