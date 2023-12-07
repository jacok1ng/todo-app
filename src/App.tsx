// import { useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
// import { SearchBar, TaskList, TaskModal } from 'components'
import { TaskModal } from 'components'
import { useToggle } from 'hooks'

const queryClient = new QueryClient()

function App() {
  const [isOpen, toggle] = useToggle()
  // const [searchName, setSearchName] = useState('')

  return (
    <QueryClientProvider client={queryClient}>
      <TaskModal isOpen={isOpen} toggle={toggle} />
      <div className="m-auto mt-10 flex w-[650px] flex-col items-center justify-center space-y-3">
        {/* <h1 className="mb-5 text-6xl">Todo App</h1>
        <SearchBar onAdd={toggle} setSearchName={setSearchName} />
        <TaskList searchName={searchName} /> */}
        cześć
      </div>
    </QueryClientProvider>
  )
}

export default App
