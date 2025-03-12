import { CounterSchema } from '../counter-schema';
import { counterActions, counterReducer } from './counter-slice';

describe('counter slice test', () => {
  const state: CounterSchema = { value: 10 };

  test('increment', () => {
    expect(counterReducer(state, counterActions.increment())).toEqual({ value: 11 });
  });

  test('decrement', () => {
    expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 9 });
  });
});
