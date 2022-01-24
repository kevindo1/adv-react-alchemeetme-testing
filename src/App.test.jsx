import { screen, render } from '@testing-library/react'
import App from './App'

test('Should render the header', async () => {
  render(<App />)

  const image = screen.getByAltText(/alchemy/i)
  expect(image).toBeInTheDocument()

  const heading = screen.getByText(/Meet/i)
  expect(heading).toBeInTheDocument()

  const name = await screen.findByText(/Vonta/i)
  expect(name).toBeInTheDocument()
})
