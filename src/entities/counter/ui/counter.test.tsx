import Counter from './counter';
import { renderComponent } from 'shared/lib';
import { screen } from '@testing-library/react';

describe('counter test', () => {
  test('render', () => {
    renderComponent(<Counter />);
    expect(screen.getByTestId('counter')).toBeInTheDocument();
  });
});

