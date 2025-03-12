import { StateSchema } from 'app/providers/store-provider';
import { counterReducer, getCounter } from './counter-selector';

describe('counter selector test', () => {
  const state: StateSchema = {
    counter: { value: 10 },
  }

  test('counterReducer', () => {
    expect(counterReducer(state)).toEqual({ value: 10 });
  });

  test('getCounter', () => {
    expect(getCounter(state)).toEqual(10);
  })
});
