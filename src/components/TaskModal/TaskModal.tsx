import TextField from 'components/TextField'

interface TaskModalProps {
  isOpen: boolean
  toggle: () => void
}

const TaskModal = ({ isOpen, toggle }: TaskModalProps) => {
  return (
    <div
      className={`${
        isOpen ? 'flex' : 'hidden'
      } absolute left-0  top-0 h-screen w-screen items-center justify-center bg-black bg-opacity-40`}
      onClick={toggle}
    >
      <div
        className="flex h-[400px] w-[650px] flex-col space-y-5 rounded bg-white px-11 py-10"
        onClick={(e) => e.stopPropagation()}
      >
        <TextField placeholder="Nazwa zadania" />
        <textarea
          placeholder="Opis zadania..."
          className="h-[100px] max-h-[100px] min-h-[100px] rounded border-2 border-stone-400 px-3 py-1"
        />
      </div>
    </div>
  )
}

export default TaskModal
