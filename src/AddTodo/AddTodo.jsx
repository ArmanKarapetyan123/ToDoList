const AddTodo = ({handleAddTask}) => {
    return (
        <div className="add-todo-form">
            <input className="add-todo-input" type="text" placeholder="Add Todo" />
            <button className="item-button edit-button" onClick={() => {handleAddTask()}}>ADD TASK</button>
        </div>
    )
}

export default AddTodo;