import { SearchBar, TaskList, TaskModal } from 'components'
import { useToggle } from 'hooks'

function App() {
  const [isOpen, toggle] = useToggle()

  return (
    <>
      <TaskModal isOpen={isOpen} toggle={toggle} />
      <div className="m-auto mt-10 flex w-[650px] flex-col items-center justify-center space-y-3">
        <h1 className="mb-5 text-6xl">Todo App</h1>
        <SearchBar onAdd={toggle} />
        <TaskList />
      </div>
    </>
  )
}

export default App
