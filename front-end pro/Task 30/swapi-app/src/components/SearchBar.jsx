import { useState } from "react";
import { useDispatch } from "react-redux";
import { getSwapiInfo } from "../redux/swapiSlice";

const SearchBar = () => {
  const [query, setQuery] = useState("people/1");
  const dispatch = useDispatch();

  const handleSearch = () => {
    const apiUrl = `https://swapi.py4e.com/api/${query}`;
    dispatch(getSwapiInfo(apiUrl));
  };

  return (
    <div>
      <input 
        type="text"
        id="search-input"  
        name="query"
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
      />
      <button onClick={handleSearch}>Get info</button>
    </div>
  );
};

export default SearchBar;