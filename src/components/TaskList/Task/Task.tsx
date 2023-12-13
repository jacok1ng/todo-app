import { useState } from 'react'
import { DeleteIcon } from 'icons'

interface TaskProps {
  title: string
  description: string
}

const Task = ({ title, description }: TaskProps) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleDescription = () => setIsExpanded((prev) => !prev)

  return (
    <div className="flex flex-col space-y-2 rounded-md border-2 border-stone-400 px-5 py-2">
      <div className="flex w-full">
        <h4 className="w-1/2 font-medium">{title}</h4>
        <div className="flex w-1/2 cursor-pointer items-center justify-end text-red-600 ">
          <div className="rounded p-1 transition-all hover:bg-slate-100">
            <DeleteIcon />
          </div>
        </div>
      </div>
      <div className="h-px w-full bg-stone-400" />
      <div className={isExpanded ? 'line-clamp-none' : 'line-clamp-2'}>
        {description}
      </div>
      <button
        className="cursor-pointer text-blue-500 hover:underline"
        onClick={toggleDescription}
      >
        {isExpanded ? 'Zamknij' : '...'}
      </button>
    </div>
  )
}

export default Task
