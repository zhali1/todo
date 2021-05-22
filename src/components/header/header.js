import React from 'react';

const Header = ({todos}) => {
    const more = () => {
      return todos.filter((todo) => todo.isActive).length
    };
    const done = () => {
        return todos.filter((todo) => !todo.isActive).length
    };
    return (
        <header className='header'>
            <h1>Todo list</h1>
            <div className="statusBar">
                {more()} more to do, {done()} done
            </div>
        </header>
    );
};

export default Header;