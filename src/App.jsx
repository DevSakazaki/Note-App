import React, { useState } from 'react';

import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import './App.css'

const App = () => {
  const [tasks, setTask] = useState([
    {
      id: '1',
      title: 'Estudar Programação',
      completed: false,
    },
    {
      id: '2',
      title: 'Ler Livros',
      completed: true, 
    }
  ]);

  const handleTaskAddition = (taskTitle) =>{
    const newTasks = [ ...tasks, {
      title: taskTitle,
      id: Math.random(10),
      completed: false
    }]

    setTask(newTasks)
  }

  return(
    <>
        <div className = "container">
          <AddTask  handleTaskAddition ={handleTaskAddition}/>
          <Tasks tasks={tasks} />
        </div> 
    </>

  );
 
};

export default App;
