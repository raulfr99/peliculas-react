import React from 'react'

function Search({handleInput, search}) {
    return (
       <section className="searchbox-wrap">
           <input type="text" 
           placeholder="Buscar una pelicula..." 
           className="searchbox" 
           onChange={handleInput} 
           onKeyPress={search}
           />
       </section>
    )
}

export default Search
