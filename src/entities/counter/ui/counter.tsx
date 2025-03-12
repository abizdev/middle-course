import React from 'react';
import { Button, ButtonTheme } from 'shared/ui';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../model/counter-slice';
import { getCounter } from '../model/counter-selector';

const Counter: React.FC = () => {
  const value = useSelector(getCounter)
  const dispatch = useDispatch();

  const onIncrement = () => dispatch(counterActions.increment())
  const onDecrement = () => dispatch(counterActions.decrement())

  return (
    <div>
      <h1>value {value}</h1>
      <Button variant={ButtonTheme.OUTLINE} onClick={onIncrement}>increment</Button>
      <Button variant={ButtonTheme.OUTLINE} onClick={onDecrement}>decrement</Button>
    </div>
  );
};

export default Counter;
