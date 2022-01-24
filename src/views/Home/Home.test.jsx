import { screen, render, waitForElementToBeRemoved } from '@testing-library/react'
import Home from './Home'

const user = {
  id: 1,
  created_at: '2021-12-13T00:17:29+00:00',
  name: 'Vonta',
  avatar: 'https://thumbs.gfycat.com/NiceRequiredGrunion-size_restricted.gif',
  header: 'https://static.wikia.nocookie.net/naruto/images/5/50/Team_Kakashi.png',
  likes: ['React', 'Anime', 'Traveling', 'Living', 'Tower Defense Games', 'Card Games'],
  motto: 'Res Non Verba',
  color: 'crimson',
}

test('Should render the user profile', async () => {
  render(<Home user={user} />)

  const banner = screen.getByAltText(/header/i)
  expect(banner).toBeInTheDocument()

  const avatar = screen.getByAltText(/avatar/i)
  expect(avatar).toBeInTheDocument()

  const name = await screen.findByText(/Vonta/i)
  expect(name).toBeInTheDocument()

  const motto = await screen.findByText(/res non verba/i)
  expect(motto).toBeInTheDocument()

  const color = await screen.findByText(/favorite/i)
  expect(color).toBeInTheDocument()

  const interests = await screen.findByText(/interests/i)
  expect(interests).toBeInTheDocument()

  const interestsList = await screen.findByText(/living/i)
  expect(interestsList).toBeInTheDocument()

  // await waitForElementToBeRemoved(() => screen.getByText(/loading/i))
})
