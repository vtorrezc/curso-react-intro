import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';

import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';

import { CreateTodoButton } from '../CreateTodoButton';
import React from 'react';
import { TodoContext } from '../TodoContext'
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';

function AppUI({
  //loading,
  //error,
  //completedTodos
  //,totalTodos
  //,searchValue
  //,setSearchValue
  //,searchedTodos
  //,completeTodo
  //,deleteTodo
}) {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
  return (
    <React.Fragment>
      {/* <TodoCounter completed={completedTodos} total={totalTodos}/> */}
      {/* <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/> */}

      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {loading && <TodosLoading />}
        {error && <TodosError />}
        {(!loading && searchedTodos.lenght === 0) && <EmptyTodos />}

        {searchedTodos.map(todo => (
          <TodoItem key={todo.text}
            text={todo.text} completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton setOpenModal={setOpenModal}/>

      {openModal && (
        <Modal>
          <TodoForm/>
        </Modal>
      )}

    </React.Fragment>
  );
}
export { AppUI };