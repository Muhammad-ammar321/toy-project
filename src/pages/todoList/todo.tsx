import { useState, useEffect, type ChangeEvent, type FormEvent } from 'react'
import './todo.css'

type TodoItem = {
  id: number,
  text: string,
  completed: boolean

}

const Todo = () => {
  const [task, setTask] = useState('')
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Go to gym',
      completed: false

    },
    {
      id: 2,
      text: 'Buy a new laptop',
      completed: false
    },
    {
      id: 3,
      text: 'practice react',
      completed: false
    }
  ])
  const [newId, setNewId] = useState(todos.length + 1)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [editingText, setEditingText] = useState('')
  
  useEffect(() => {
    if (todos.length === 0) {
      setNewId(1)
    }
  }, [todos])
  
  
  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos))
  },[todos])

  const onChecked=(id:number)=>{
    setTodos((checkedTask)=>
      checkedTask.map((todo)=>
      todo.id === id ? {...todo,completed:!todo.completed} : todo)
    )
  }
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTask(event?.target.value)
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!task.trim()) return;
    const newTodo: TodoItem = {
      id: newId,
      text: task,
      completed: false

    }
    setTodos([...todos, newTodo])
    setTask('')
    setNewId(newId + 1)
  }

  const deleteTask = (id: number) => {
    const del = todos.filter((todo) => todo.id !== id)
    setTodos(del)
  }
  const startEditTask = (id: number, currentText: string) => {
    setEditingId(id)
    setEditingText(currentText)
  }

  const saveEditTask = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: editingText } : todo
    ))
    setEditingId(null)
    setEditingText('')
  }
  console.log(todos)

  return (
    <div className="box">
      <h1 className='header'>TODO LIST</h1>
      <div className='todo-container'>

        <form className="todo-form" onSubmit={onSubmit}>
          <label htmlFor="task" ><h3>Add a New Task</h3></label>
          {/* <small className='noList'>Plese put some value</small> */}
          <input type="text" value={task} onChange={onChange} id="task"  placeholder="What do you want to do" required />
          <button type="submit"  >Submit</button>
        </form>
      
        {todos.length > 0 ? (
          <ul className="todo-list">
            {todos.map((todo => (
              <li key={todo.id}>
                {editingId === todo.id ? (
                  <>
                    <input
                      type="text"
                      value={editingText}
                      onChange={(e) => setEditingText(e.target.value)}
                      className='bg-white text-red'
                    />
                    <div className='button-style'>
                      <button onClick={() => saveEditTask(todo.id)} >Save</button>
                      <button onClick={()=>setEditingId(null)} >cancel</button>
                    </div>
                  </>
                ) : (
                  <>
                  <input type='checkbox' checked={todo.completed} onChange={()=> onChecked(todo.id)} />
                  <label htmlFor='done-task' style={{textDecoration : todo.completed ? 'line-through': 'none'}} >{todo.text}</label>
                    <div className='button-style'>
                      <button onClick={() => deleteTask(todo.id)}  >Delete</button>
                      <button onClick={() => startEditTask(todo.id, todo.text)} >Edit</button>
                    </div>
                  </>
                )}
              </li>
            )))}
          </ul>) : (<p className='noList'>Please add some task</p>)
        }
      </div>
    </div>
  )
}

export default Todo