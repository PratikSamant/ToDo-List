import React from 'react'

// firebase imports
import { db } from '../firebase/config'
import { doc, deleteDoc } from 'firebase/firestore'

export default function TaskList({ tasks }) {

    const handleClick = async (id) => {
        
        const ref = doc(db, 'tasks', id)

        await deleteDoc( ref )
    }

  return (
    <div className='task-list'>
        <ul>
            {tasks.map(task => (
                <li key={task.id} onClick={() => handleClick(task.id)}>{task.task}</li>
            ))}
        </ul>
    </div>
  )
}
