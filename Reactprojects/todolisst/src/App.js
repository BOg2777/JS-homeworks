import React from 'react';
import { useState } from 'react'

import styles from './styles.module.css'
import Header from './components/header/header';
import ToDoList from './components/ToDoList/ToDoList';







function App() {
  const [todos, setTodos] = useState([]);

  return (
      <div className={styles.wrapper}>
        <div className={styles.todo_list}>
          <Header setTodos={setTodos} todos={todos}/>
          <div className={styles.task}>
            {todos.map(todo => {
              return <ToDoList 
              key={todo._id}
              todo={todo}/>
            })}
          </div>
        </div>
      </div>
  );
}
export default App;
