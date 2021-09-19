import React, { useState, useContext} from 'react';

import { CategoryContext } from '../App';

export default function Search() {
  const context = useContext(CategoryContext)
  const [query, setQuery] = useState();
 // const prevQuery = useRef();


  //если надо фильтровать в момент введения,а не по кнопке + добавить в импорт useEffect, useRef 
  // useEffect(() => {
  //   if (query !== prevQuery.current) {
  //     context.changeCategory(query);
  //     prevQuery.current = query;
  //   }
  // }, [query, prevQuery, context]);

  function handleSearch() {
    context.changeCategory(query);
  }

  function clearFields() {
    document.getElementById("inputField").value = "";
  }

  function handleInputChange(evt) {
    setQuery(evt.target.value);
    console.log(query);
  }

  return (
    <><div className="searchInput"><input  className="typeCategory" id="inputField"
      placeholder="Type category " 
      onfocus="this.value=''"
      onChange={handleInputChange}
    />
      <input type="button" value="Search category" onClick={handleSearch} onFocus={clearFields} />
      </div>
    </>
  )
}