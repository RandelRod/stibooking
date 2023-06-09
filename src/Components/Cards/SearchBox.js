import React from 'react';

const SearchBox = ({searchChange}) => {
    return(
    <div className='pa2 center'>
        <input className='pa3 ba br3 b--yellow bg-lightest-blue'
        type='search' placeholder='Search Instructor' onChange={searchChange}/>
    </div>
    );
}

export default SearchBox;