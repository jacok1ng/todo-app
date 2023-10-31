const Task = () => {
  return (
    <div className="flex flex-col space-y-3 rounded-md border-2 border-stone-400 px-5 py-2">
      <div>
        <h4 className="font-medium">My title</h4>
      </div>
      <div className="h-px w-full bg-stone-400" />
      <div className="line-clamp-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ea odit
        nesciunt sapiente fuga aliquam reprehenderit corporis molestiae
        blanditiis. Voluptatem ducimus dolorem magnam illo animi nesciunt
        commodi aut repellendus assumenda.
      </div>
      <div className="flex">
        <div className="basis-1/2">
          <p className="text-sm font-medium">Data stworzenia 11.12.2000</p>
        </div>
        <div className="flex basis-1/2 justify-end">
          <p className="text-sm font-medium">Data zakończenia 21.05.2001</p>
        </div>
      </div>
    </div>
  )
}

export default Task
