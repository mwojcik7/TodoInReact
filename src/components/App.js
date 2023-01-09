import React, { useState } from 'react';

import AddTask from './AddTask';
import TaskList from './TaskList';

import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 0,
      text: 'finally play the witcher',
      date: '2023-02-15',
      active: true,
      finishDate: null
    },
    {
      id: 1,
      text: 'lose weight',
      date: '2023-02-14',
      active: true,
      finishDate: null
    },
    {
      id: 2,
      text: 'go shopping',
      date: '2023-02-16',
      active: true,
      finishDate: null
    },
    {
      id: 3,
      text: 'hairdresser',
      date: '2023-02-18',
      active: false,
      finishDate: 1662217425331
    },
    {
      id: 4,
      text: 'clean the car',
      date: '2023-02-11',
      active: true,
      finishDate: null
    },
    {
      id: 5,
      text: 'fix the cabinet',
      date: '2023-02-10',
      active: true,
      finishDate: null
    },
  ])

  const [nextId, setNextId] = useState(tasks.length)

  const deleteTask = (id) => {

    let tasksCopy = [...tasks]

    tasksCopy = tasksCopy.filter(task => task.id !== id)

    setTasks(tasksCopy)
  }

  const changeTaskStatus = (id) => {
    console.log('change - ', id)

    let tasksCopy = [...tasks]

    tasksCopy.forEach(task => {
      if(task.id === id) {
        task.active = false
        task.finishDate = new Date().getTime()
      }
    })

    setTasks(tasksCopy)
  }

  const addTask = (text, date) => {
    const task = {
      id: nextId,
      text,
      date,
      active: true,
      finishDate: null
    }

    setNextId(prevValue => prevValue + 1)

    setTasks(prevState => [...prevState, task])

    return true
  }
  
  return (
    <div className='App'>
      <AddTask add={addTask} />
      <TaskList tasks={tasks} delete={deleteTask} change={changeTaskStatus} />
    </div>
  );
}

export default App;
