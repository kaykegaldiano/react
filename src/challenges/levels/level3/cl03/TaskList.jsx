import { ReactComponent as TaskIcon} from './task.svg'
import { ReactComponent as BoardIcon } from './board.svg'
import { ReactComponent as UncheckedIcon } from './unchecked.svg'
import { ReactComponent as RemoveIcon } from './remove.svg'
import './index.css'
import { useState } from 'react'

const AddTask = () => {
    const [task, setTask] = useState([])
    
    const addStorage = (e) => {
        const newTask = e.target.previousSibling.value
        setTask(prevState => [...prevState, newTask])
        localStorage.setItem('tasks', JSON.stringify([...task, newTask]))
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
    return (
        <div className='taskboard'>
            <div className='title'>
                <BoardIcon />
                <h2 className='title-text'>Quadro de tarefas</h2>
            </div>
            <div className='task'>
                <UncheckedIcon />
                <span>Reunião com cliente</span>
                <RemoveIcon />
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