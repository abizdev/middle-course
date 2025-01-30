import { fireEvent, screen } from '@testing-library/react';
import Sidebar from './sidebar'
import { renderWithTranslation } from 'shared/lib';

describe('Sidebar', () => {
  test('render sidebar', () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  test('toggle collapse', () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    const toggleBtn = screen.getByTestId('sidebar-toggle')
    fireEvent.click(toggleBtn)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})
