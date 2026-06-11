import {useState, useEffect} from 'react'
import './styles/App.css';
import Header from './components/Header'
import TodoItem from './components/TodoItem';
import TodoInput from './components/Todoinput';
import Errormessage from './components/Errormessage';
import LoadingSpinner from './components/LoadingSpinner'; 

function App() {

  const [tasks, setTasks] = useState([])
  const  [error, setError] =useState(null)
  const [isloading, setIsLoading]=useState(true)
  const handleAddtask = (title) =>{
    setTasks((state)=>[...state,
       { 
        id: state.length + 1,
        title: title,
        completed: false

      }])
  }

  const handleToggleTask=(id)=>{
    console.log(id)
    setTasks((state)=>{
      return state.map((task)=>{
        if(task.id === id)
        {
          return {...task, completed: !task.completed}
        }
        return task
      })
    })
  }
  const handleFetchTasks = async () =>{
    try{
    const response= await fetch("https://jsonplaceholder.typicode.com/todos")

    const todos = await response.json()

    setTasks(todos.slice(0,10).map((todo)=>(
      {id: todo.id, title: todo.title, completed: todo.completed})))
    console.log(todos)
    }catch(error)
    {
      setError("Nie udalo sie pobrac z bazy danych")
    }finally{
      setIsLoading(false)
    }
   

  }
  useEffect(()=>{
    handleFetchTasks()
  }, [tasks])

  const getView= () => {
    if(isloading){
      return(
        <LoadingSpinner/>
      )
    }
    if(error !== null)
    {
      return <Errormessage message={error}/> 
    }


    return(
      <>
             <TodoInput handleAddTask={handleAddtask}/>
      <div className="todo-list">
        {tasks.map((tasks)=>{
          return(
        <TodoItem handleToggleTask={()=>{handleToggleTask(tasks.id)}} completed= {tasks.completed} title={tasks.title} key={tasks.id}/>
          )
        })}
      </div>
          </>
    )
  }
  return (
    <div className='mx-auto max-w-2xl'>
      <Header/>      
        {getView()}
    </div>
  );
}

export default App;
