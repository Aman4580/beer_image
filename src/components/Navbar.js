import React from 'react'
import { AppContext } from '../context/AppContext'
import { useContext,useState } from 'react';

const Navbar = () => {

    const [query, setQuery] = useState('');
    const {posts,setPosts} = useContext(AppContext);


    const handleInputChange = (event) => {
        setQuery(event.target.value);
      };
      const performSearch = () => {
        const filteredResults = posts.filter(beer =>
          beer.name.toLowerCase().includes(query.toLowerCase())
        );
        setPosts(filteredResults);
      };

    return (
        <div>
          <div className="nav">
            <div className="search-container ">
            <input type="text" 
            value={query}
             onChange={handleInputChange}
            className="search-input" placeholder="Search..." 
            />
            <button 
            onClick={performSearch}
            className="search-button">Search</button>
            </div>
          </div> 
        </div>
    )
}

export default Navbar
