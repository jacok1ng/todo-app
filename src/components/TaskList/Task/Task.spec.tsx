import { render, screen } from '@testing-library/react'
import Task from '.'

test('<Task />', () => {
  render(<Task title="Mój tytuł" description="Opis wpisu" />)

  expect(screen.getByRole('heading')).toHaveTextContent('Mój tytuł')
  expect(screen.getByText('Opis wpisu')).toBeVisible()
})
