import React, { useEffect, useState } from 'react';
import './Search-module.css';



const Search = ({handleSearch}) => {
    const [searchText, setSearchText]=useState('')
const handleSearchText=(e)=>{
    setSearchText(e.target.value)
};
useEffect(()=>{
    handleSearch(searchText)
},[searchText])
    return (
        <div className='search-div'>
            <input type="text"
            value={searchText} 
            onChange={handleSearchText} />
        </div>
    );
};

export default Search;