import { render, screen } from '@testing-library/react';
import Button, { ThemeButton } from './button';

describe('Button', () => {
  test('render button', () => {
    render(<Button variant={ThemeButton.CLEAR}>Button</Button>);
    expect(screen.getByText('Button')).toBeInTheDocument()
  })
})
