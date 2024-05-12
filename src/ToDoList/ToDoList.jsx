import ToDoItem from './ToDoItem';

const ToDoList = ({todoItems, handleDelete, handleEdit}) => {
    console.log(todoItems)
    // const jsxArray = [];

    // for(let obj of todoItems) {
    //     const el = <ToDoItem item={obj.item} id={obj.id} key={obj.id}/>
    //     jsxArray.push(el);
    // }
    const jsxArray = todoItems.map((obj) => 
        <ToDoItem 
            item={obj.item} 
            id={obj.id}  
            key={obj.id}
            handleDelete={handleDelete} 
            handleEdit= {handleEdit}
        />
); 
    return (
        <ul>
            {jsxArray}
        </ul>
    )
}

export default ToDoList;
