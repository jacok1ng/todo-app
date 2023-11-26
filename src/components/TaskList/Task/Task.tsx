interface TaskProps {
  title: string
  description: string
}

const Task = ({ title, description }: TaskProps) => (
  <div className="flex flex-col space-y-3 rounded-md border-2 border-stone-400 px-5 py-2">
    <div>
      <h4 className="font-medium">{title}</h4>
    </div>
    <div className="h-px w-full bg-stone-400" />
    <div className="line-clamp-2">{description}</div>
  </div>
)

export default Task
