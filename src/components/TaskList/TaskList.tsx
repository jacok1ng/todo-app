import { useQuery } from 'react-query'
import Task from './Task'
import { getTodos } from 'api'
import { TodoItem } from 'types'
import EmptyListIndicator from './EmptyListIndicator'
import LoadingIndicator from './LoadingIndicator'

interface TaskListProps {
  searchName: string
}

const TaskList = ({ searchName }: TaskListProps) => {
  const { data, isLoading } = useQuery<TodoItem[]>(
    ['todos', searchName],
    getTodos(searchName)
  )

  if (isLoading) return <LoadingIndicator />

  if (!data || !data?.length) return <EmptyListIndicator />

  return (
    <div className="flex max-h-[700px] w-[650px] flex-col gap-3 overflow-y-auto scroll-auto">
      {data.map(({ id, createDate, noteValue, title }) => (
        <Task
          key={id}
          id={id}
          description={noteValue}
          title={title}
          createDate={createDate}
        />
      ))}
    </div>
  )
}

export default TaskList
