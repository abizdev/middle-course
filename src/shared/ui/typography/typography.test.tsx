import { render, screen } from '@testing-library/react';
import Typography, { TypographyTheme } from './typography';

describe('Typography', () => {
  test('render Typography', () => {
    render(<Typography theme={TypographyTheme.primary} title='Title' text='desctiption text' />);
    expect(screen.getByText('Title')).toBeInTheDocument()
  })

  test('error theme', () => {
    render(<Typography theme={TypographyTheme.error} title='Title' text='desctiption text' />);
    expect(screen.getByText('Title')).toHaveClass('error');
  })
})
