import { TodoContext } from '../TodoContext';
import './TodoSearch.css'
import React from 'react';

function TodoSearch(){
    const {searchValue,setSearchValue} = React.useContext(TodoContext);

    
    return (
        <input 
        placeholder="Cortar cebolla" 
        className="TodoSearch"
        value={searchValue}
        onChange={(event)=>{
            //console.log('Escribiste en el TODO SEARCH')
            //console.log(event)
            //console.log(event.target)
            //console.log(event.target.value)
            setSearchValue(event.target.value);
        }}
        />
        
    );
}
export {TodoSearch};