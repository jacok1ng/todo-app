import { ReactNode } from 'react'

interface LabeledFieldProps {
  label: string
  component: ReactNode
}

const LabeledField = ({ component, label }: LabeledFieldProps) => (
  <div className="flex flex-col space-y-1">
    <p className="font-semibold">{label}</p>
    {component}
  </div>
)

export default LabeledField
