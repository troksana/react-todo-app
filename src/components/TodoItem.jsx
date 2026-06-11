import { CheckCircle2, Circle } from 'lucide-react';


const TodoItem = ({completed, title, handleToggleTask})=> {

    return(
       <div className={`todo-item ${completed ? 'completed' : ''}`}>
          <div onClick={handleToggleTask} className="todo-checkbox">
            { completed ? <CheckCircle2 className='check-icon'/>
            : <Circle className='circle-icon'/>}
          </div>
          <span className="todo-title">{title}</span>
        </div> 
    )
}
export default TodoItem