import React from 'react';
import { Button, ButtonTheme } from 'shared/ui';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../model/counter-slice/counter-slice';
import { getCounter } from '../model/conter-selector/counter-selector';

const Counter: React.FC = () => {
  const value = useSelector(getCounter)
  const dispatch = useDispatch();

  const onIncrement = () => dispatch(counterActions.increment())
  const onDecrement = () => dispatch(counterActions.decrement())

  return (
    <div data-testid="counter">
      <h1>value {value}</h1>
      <Button data-testid='increment' variant={ButtonTheme.OUTLINE} onClick={onIncrement}>increment</Button>
      <Button data-testid='decrement' variant={ButtonTheme.OUTLINE} onClick={onDecrement}>decrement</Button>
    </div>
  );
};

export default Counter;
