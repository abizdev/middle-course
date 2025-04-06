import React from 'react';
import { Button, ButtonTheme } from 'shared/ui';
import { useSelector } from 'react-redux';
import { counterActions } from '../model/counter-slice/counter-slice';
import { getCounter } from '../model/conter-selector/counter-selector';
import { useAppDispatch } from 'shared/lib';

const Counter: React.FC = () => {
  const value = useSelector(getCounter);
  const dispatch = useAppDispatch();

  const onIncrement = () => dispatch(counterActions.increment());
  const onDecrement = () => dispatch(counterActions.decrement());

  return (
    <div data-testid="counter">
      <h1>{value}</h1>
      <Button data-testid="increment" variant={ButtonTheme.OUTLINE}
        onClick={onIncrement}>+</Button>
      <Button data-testid="decrement" variant={ButtonTheme.OUTLINE}
        onClick={onDecrement}>-</Button>
    </div>
  );
};

export default Counter;
