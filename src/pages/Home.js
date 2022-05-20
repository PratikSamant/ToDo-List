import TaskList from '../components/TaskList'
import TaskForm from '../components/TaskForm'
import { useCollection } from '../hooks/useCollection'
import { useAuthContext } from '../hooks/useAuthContext'

export default function Home() {
  const { user } = useAuthContext()
  const { documents: tasks } = useCollection('tasks', ['uid', '==', user.uid])

  return (
    <div>
        {tasks && <TaskList tasks={tasks} />}
        <TaskForm />
    </div>
  )
}
