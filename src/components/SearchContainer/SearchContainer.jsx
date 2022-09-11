import React, { useState } from 'react'
import './SearchContainer.css'
import SearchIcon from '@mui/icons-material/Search'
import { Link } from 'react-router-dom'
const SearchContainer = (props) => {
  const [text, setText] = useState('')

  const handleInput = (e) => {
    setText(e.target.value);
  }
  const handleSearch = () =>{

  }

  return (
    <div className="search-container">
      <input type="text"
        placeholder='Search all the GIFS and Stickers here'
        value={text}
        onChange={handleInput} />
      <button type="submit" className="search-icon" onClick={handleSearch}>
        <Link search={text} to={`/search/${text}`}>
          <SearchIcon />
        </Link>
      </button>
    </div>
  )
}

export default SearchContainer