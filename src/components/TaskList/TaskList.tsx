import Task from './Task'

const TaskList = () => (
  <div className="flex max-h-[700px] w-[650px] flex-col gap-3 overflow-y-auto scroll-auto">
    <Task
      title="Title 1"
      description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus ipsa, facere eius repellendus ducimus aliquam molestias id recusandae distinctio quae."
    />
    <Task
      title="Title 2"
      description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus ipsa, facere eius repellendus ducimus aliquam molestias id recusandae distinctio quae."
    />
    <Task
      title="Title 3"
      description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus ipsa, facere eius repellendus ducimus aliquam molestias id recusandae distinctio quae."
    />
    <Task
      title="Title 4"
      description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus ipsa, facere eius repellendus ducimus aliquam molestias id recusandae distinctio quae."
    />
    <Task
      title="Title 5"
      description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus ipsa, facere eius repellendus ducimus aliquam molestias id recusandae distinctio quae."
    />
  </div>
)

export default TaskList
