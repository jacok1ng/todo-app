import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export enum TaskFormFields {
  title = 'title',
  description = 'description',
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

export const useOnSubmit = () => {
  const onSubmit = (values: TaskFormValues) => {
    console.log(values)
  }

  return onSubmit
}
