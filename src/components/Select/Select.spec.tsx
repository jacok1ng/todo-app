import { render, screen } from '@testing-library/react'
import Select from '.'
import userEvent from '@testing-library/user-event'

const options = [
  { label: 'val1', value: 'val1' },
  { label: 'val2', value: 'val2' },
]

test('<Select />', async () => {
  render(<Select options={options} />)

  const select = screen.getByRole('combobox')

  await userEvent.selectOptions(select, 'val1')
  expect(select).toHaveValue('val1')

  await userEvent.selectOptions(select, 'val2')
  expect(select).toHaveValue('val2')
})
