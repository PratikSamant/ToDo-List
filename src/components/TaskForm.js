import { useState } from 'react'
import { db } from '../firebase/config'
import { useAuthContext } from '../hooks/useAuthContext'

// firebase imports
import { addDoc, collection } from 'firebase/firestore'

export default function TaskForm() {
    const [ newTask, setNewTask ] = useState('')
    const { user } = useAuthContext()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const ref = collection(db, 'tasks')

        await addDoc(ref, {
            task: newTask,
            uid: user.uid
        })
        

        setNewTask('')
    }

  return (
    <form onSubmit={handleSubmit} >
        <label>
            <span>Add a new Task: </span>
            <input
                required
                type='text' 
                onChange={(e) => setNewTask(e.target.value)}
                value={newTask}
            />
        </label>
        <button>Add Task</button>

    </form>
  )
}
