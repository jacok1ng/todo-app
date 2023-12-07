import { Button } from 'components'
import LabeledField from './LabeledField'
import {
  TaskFormFields,
  useOnSubmit,
  useTaskFormProps,
} from './TaskModal.utils'

interface TaskModalProps {
  isOpen: boolean
  toggle: () => void
}

const TaskModal = ({ isOpen, toggle }: TaskModalProps) => {
  const { handleSubmit, register, reset } = useTaskFormProps()
  const onClose = () => {
    toggle()
    reset()
  }
  const onSubmit = useOnSubmit(onClose)

  return (
    <div
      className={`${
        isOpen ? 'flex' : 'hidden'
      } absolute left-0  top-0 h-screen w-screen items-center justify-center bg-black bg-opacity-40`}
      onClick={onClose}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex  w-[650px] flex-col space-y-5 rounded bg-white px-11 py-10"
        onClick={(e) => e.stopPropagation()}
      >
        <LabeledField
          label="Nazwa zadania"
          component={
            <input
              {...register(TaskFormFields.title)}
              placeholder="Nazwa zadania"
              className="h-[36px] rounded border-2 border-slate-400 px-2"
            />
          }
        />
        <LabeledField
          label="Opis zadania"
          component={
            <textarea
              {...register(TaskFormFields.description)}
              placeholder="Opis zadania..."
              className="h-[100px] max-h-[100px] min-h-[100px] rounded border-2 border-stone-400 px-3 py-1"
            />
          }
        />
        <div className="flex justify-center gap-3 pt-3">
          <Button type="submit" className="w-44 bg-green-600">
            Utwórz
          </Button>
          <Button onClick={toggle} className="w-44" type="reset">
            Zamknij
          </Button>
        </div>
      </form>
    </div>
  )
}

export default TaskModal
