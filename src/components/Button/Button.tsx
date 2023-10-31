import { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import { ExtendedStyling } from 'types'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & ExtendedStyling

const Button = ({
  children,
  className,
  ...props
}: PropsWithChildren<ButtonProps>) => (
  <button
    className={`flex w-full items-center justify-center gap-2 rounded bg-blue-500 px-3 py-1 font-semibold text-white ${className}`}
    {...props}
  >
    {children}
  </button>
)

export default Button
