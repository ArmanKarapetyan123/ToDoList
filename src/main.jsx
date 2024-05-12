import './index.css';
import ReactDOM from 'react-dom/client'
import Header from './Header/Header'
import ToDoList from './ToDoList/ToDoList';
import AddTodo from './AddTodo/AddTodo'

  const App = () => {
    const headerText = "Todo  App";
    const todoItems = [
      { item : "Buy a new gameing laptop", id : 1},
      { item : "Complite a previous task", id : 2},
      { item : "create a video", id : 3},
      { item : "learn English", id : 4},
      { item : "sleep", id : 5},
    ];
    const handleDelete = (id) =>{
      console.log(`Delete ${id}`);
    } 
    const handleEdit = (id, item) => {
      console.log(`Edit ${id} - ${item}`);
    }

    return (
    <div className='app'>
      <Header text={headerText}/>
      <ToDoList todoItems={todoItems} handleDelete={handleDelete} handleEdit={handleEdit}/>
      <AddTodo/>
    </div>
    )
  }

ReactDOM.createRoot(document.getElementById('root')).render(<App/>)
