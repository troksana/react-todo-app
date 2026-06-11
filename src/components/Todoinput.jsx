import {useState} from 'react'

function TodoInput({handleAddTask}){
const [inputValue, setInputValue] = useState("")
const [error, setError] = useState("")

const handleUpdateInput= (e) => {
      setInputValue(e.target.value)
}

const handleSubmitForm = (e) => 
  {
    e.preventDefault()


    if(inputValue.length === 0)
    {
      setError("Tekst za krótki!")
      return
    }
    if(inputValue.length > 30)
    {
      setError("Tekst za długi!") 
      return
    }
      setError("")
      handleAddTask(inputValue)

}
    return(

        <div className="add-todo-container">
        <form onSubmit={handleSubmitForm} className="add-todo-form">
          <input  value={inputValue} onChange={handleUpdateInput} className="add-todo-input" type="text" placeholder='Add task'/>
          <button className="add-todo-button" type="submit">Add</button>
        </form>
        <p className="error-message">{error}</p>
      </div>
    )

}

export default TodoInput