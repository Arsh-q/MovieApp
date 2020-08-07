import React from 'react';
import { useState } from 'react';
import {search} from 'react-icons-kit/icomoon/search';
import { Icon } from 'react-icons-kit';
import {glass} from 'react-icons-kit/iconic/glass';

const Search = (props) => {
    const [query, setQuery] = useState('');
const handleSearch = (e) => {
    e.preventDefault();
    props.search(query);
    setQuery('');
}
    return(<>
        <div className='search-box'>
        <input type="text"
          placeholder='Search...'
          value={query}
          onChange={(e) => {setQuery(e.target.value);}}
        />
        <button className='btn btn-dark' onClick={handleSearch}>
        <Icon icon={glass} size={25} /></button>
        </div>
        
      </>);
}

export default Search;