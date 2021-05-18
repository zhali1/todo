import React from 'react';
import StatusBtns from "../statusBtns";
import Search from "../search";

const NavPanel = () => {
    return (
        <div className='search'>
            <Search/>
            <StatusBtns/>
        </div>
    );
};

export default NavPanel;