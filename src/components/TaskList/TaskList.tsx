import Task from './Task'

const TaskList = () => {
  return (
    <div className="flex max-h-[700px] w-[650px] flex-col gap-3 overflow-y-auto scroll-auto">
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
    </div>
  )
}

export default TaskList
