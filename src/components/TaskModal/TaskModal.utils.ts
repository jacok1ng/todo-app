import { zodResolver } from '@hookform/resolvers/zod'
import { createTodo } from 'api'
import { useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from 'react-query'
import { z } from 'zod'

export enum TaskFormFields {
  title = 'title',
  description = 'noteValue',
}

interface TaskFormValues {
  [TaskFormFields.title]: string
  [TaskFormFields.description]: string
}

const defaultValues: TaskFormValues = {
  [TaskFormFields.title]: '',
  [TaskFormFields.description]: '',
}

const useValidationSchema = () => {
  return z.object({
    [TaskFormFields.title]: z.string().min(4),
    [TaskFormFields.description]: z.string().min(4),
  })
}

export const useTaskFormProps = () => {
  const schema = useValidationSchema()

  return useForm({
    resolver: zodResolver(schema),
    defaultValues,
    reValidateMode: 'onBlur',
  })
}

export const useOnSubmit = (onClose: () => void) => {
  const queryClient = useQueryClient()
  const { mutate: addTodo } = useMutation(createTodo, {
    onSuccess: () => queryClient.invalidateQueries({ queryKey: 'todos' }),
  })
  const onSubmit = (values: TaskFormValues) => {
    addTodo(values)
    onClose()
  }

  return onSubmit
}
