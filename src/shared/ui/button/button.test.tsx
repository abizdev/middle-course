import { render, screen } from '@testing-library/react';
import Button, { ButtonTheme } from './button';

describe('Button', () => {
  test('render button', () => {
    render(<Button variant={ButtonTheme.CLEAR}>Button</Button>);
    expect(screen.getByText('Button')).toBeInTheDocument()
  })

  test('clear theme', () => {
    render(<Button variant={ButtonTheme.CLEAR}>Button</Button>);
    expect(screen.getByText('Button')).toHaveClass('clear');
  })
})
