import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

test('renders homepage', () => {
  render(<App />);
  const playlistDisplay = screen.getByText(/Playlist/i);
  const selectButton = screen.getByText('SELECT');
  expect(playlistDisplay).toBeInTheDocument();
  expect(selectButton).toBeInTheDocument();
});
