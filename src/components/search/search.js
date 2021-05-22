import React from 'react';

const Search = ({setSearchInput}) => {
    return (
        <input type="text" placeholder='search to do' onChange={(e) => setSearchInput(e.target.value)}/>
    );
};

export default Search;