import React from 'react';
import { useLocalStorage } from './useLocalStorage'

const TodoContext = React.createContext();


//const defaultTodos=[{text:'Cortar Cebolla',completed:true},{text:'Tomar el curso de intro a react',completed:false},{text:'Llorar con la llorona',completed:false},{text:'Lalalala',completed:false},{text:'Usar estados derivados',completed:true}];
//localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));

function TodoProvider({ children }) {
  //const [todos,setTodos] = React.useState(defaultTodos);
  //const [todos,setTodos] = React.useState(parsedTodos);
  //const [todos,saveTodos] = useLocalStorage('TODOS_V1',[]);
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter(
    todo => !!todo.completed
  ).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    }
  );

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      text,
      completed: false,
    });
    saveTodos(newTodos);
  };

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <TodoContext.Provider value={{
      loading,
      error,
      completedTodos,
      totalTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      addTodo,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal,
    }}>
      {children}
    </TodoContext.Provider>
  );
}
{/* <TodoContext.Provider></TodoContext.Provider>
<TodoContext.Consumer></TodoContext.Consumer> */}


export { TodoContext, TodoProvider };