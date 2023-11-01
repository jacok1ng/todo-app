import { zodResolver } from '@hookform/resolvers/zod'
import { format } from 'date-fns'
import { useForm } from 'react-hook-form'
import { Priority } from 'types'
import { z } from 'zod'

export enum TaskFormFields {
  title = 'title',
  description = 'description',
  endDate = 'endDate',
  priority = 'priority',
}

interface TaskFormValues {
  [TaskFormFields.title]: string
  [TaskFormFields.description]: string
  [TaskFormFields.endDate]: string
  [TaskFormFields.priority]: Priority
}

const defaultValues: TaskFormValues = {
  [TaskFormFields.title]: '',
  [TaskFormFields.description]: '',
  [TaskFormFields.endDate]: format(new Date(), 'yyyy-MM-dd'),
  [TaskFormFields.priority]: Priority.Normal,
}

const useValidationSchema = () => {
  return z.object({
    [TaskFormFields.title]: z.string().min(4),
    [TaskFormFields.description]: z.string().min(4),
    [TaskFormFields.endDate]: z.string(),
    [TaskFormFields.priority]: z.nativeEnum(Priority),
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
