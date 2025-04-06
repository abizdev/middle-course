import { StaticReducers } from 'app/providers/store-provider';
import { counterReducer, getCounter } from './counter-selector';

describe('counter login-selector test', () => {
  const state: StaticReducers = {
    counter: { value: 10 },
    user: {}
  };

  test('counterReducer', () => {
    expect(counterReducer(state)).toEqual({ value: 10 });
  });

  test('getCounter', () => {
    expect(getCounter(state)).toEqual(10);
  });
});
