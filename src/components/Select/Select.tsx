import { SelectHTMLAttributes } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import { SelectOption } from 'types'

interface SelectProps<T extends string | number>
  extends SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOption<T>[]
  register?: UseFormRegisterReturn
}

const Select = <T extends string | number>({
  options,
  register,
  ...props
}: SelectProps<T>) => (
  <select {...props} {...register}>
    {options.map(({ label, value }, i) => (
      <option key={`${label}-${value}-${i}`} value={value}>
        {label}
      </option>
    ))}
  </select>
)

export default Select
