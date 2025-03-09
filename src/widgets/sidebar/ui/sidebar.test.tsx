import { fireEvent, screen } from '@testing-library/react';
import Sidebar from './sidebar'
import { renderComponent } from 'shared/lib';

describe('Sidebar', () => {
  test('render sidebar', () => {
    renderComponent(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  test('toggle collapse', () => {
    renderComponent(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    const toggleBtn = screen.getByTestId('sidebar-toggle')
    fireEvent.click(toggleBtn)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})
