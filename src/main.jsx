import React from 'react'
import './index.css';
import ReactDOM from 'react-dom/client'
import Header from './Header/Header'
import ToDoList from './ToDoList/ToDoList';
import AddTodo from './AddTodo/AddTodo'


  const jsxElement = (
    <div className='app'>
      <Header/>
      <ToDoList/>
      <AddTodo/>
    </div>
  )

ReactDOM.createRoot(document.getElementById('root')).render(jsxElement)
