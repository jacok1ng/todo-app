import { InputHTMLAttributes } from 'react'
import { ExtendedStyling } from 'types'

type TextFieldProps = ExtendedStyling & InputHTMLAttributes<HTMLInputElement>

const TextField = ({ className, ...props }: TextFieldProps) => (
  <input
    type="text"
    className={`rounded border-2 border-stone-400 px-3 py-1 ${className}`}
    {...props}
  />
)

export default TextField
