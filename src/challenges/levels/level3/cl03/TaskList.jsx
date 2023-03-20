import { ReactComponent as TaskIcon } from './task.svg'
import { ReactComponent as BoardIcon } from './board.svg'
import { ReactComponent as CheckedIcon } from './check.svg'
import { ReactComponent as UncheckedIcon } from './unchecked.svg'
import { ReactComponent as RemoveIcon } from './remove.svg'
import './index.css'
import { useEffect, useState } from 'react'

let nextId = 0

const AddTask = () => {
    const [task, setTask] = useState([])

    const addStorage = (e) => {
        const newTask = e.target.previousSibling.value
        setTask(prevState => [...prevState, {id: nextId++, name: newTask, checked: false}])
        localStorage.setItem('tasks', JSON.stringify([...task, { id: nextId++, name: newTask, checked: false}]))
        window.dispatchEvent(new Event('storage'))
        e.target.previousSibling.value = ''
        e.target.previousSibling.focus()
    }

    return (
        <div className='addTask'>
            <div className='title'>
                <TaskIcon />
                <h1 className='title-text'>Adicionar uma tarefa</h1>
            </div>
            <div className='addTask-add'>
                <input type="text" placeholder='Descreva a tarefa' />
                <button onClick={addStorage}>Criar tarefa</button>
            </div>
        </div>
    )
}

const TaskBoard = () => {
    const [value, setValue] = useState(true)
    
    function updateComponent() {
        setValue(!value)
    }

    useEffect(() => {
        window.addEventListener('storage', updateComponent)
    }, [value])

    const tasks = JSON.parse(localStorage.getItem('tasks')) || []

    const taskItems = tasks.map(task => (
        <div className='task' key={task.id}>
            <div>
                { task.checked ? (
                    <CheckedIcon />
                ) : <UncheckedIcon /> }
                <span>{task.name}</span>
            </div>
            <RemoveIcon />
        </div>
    ))

    return (
        <div className='taskboard'>
            <div className='title'>
                <BoardIcon />
                <h2 className='title-text'>Quadro de tarefas</h2>
            </div>
            <div className='task-items'>
                {taskItems}
            </div>
        </div>
    )
}

export const TaskList = () => {
    return (
        <div className='container'>
            <AddTask />
            <TaskBoard />
        </div>
    )
}