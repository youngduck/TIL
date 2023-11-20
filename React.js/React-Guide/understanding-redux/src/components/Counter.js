import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

import { counterActions } from "../store/counter-slice";
const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);

  const incrementHandler = (num) => {
    dispatch(counterActions.increment(num)); //{type:SOME_UNIQUE_IDENTFIER,payload:num값}
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  const countComponent = showCounter && (
    <>
      {" "}
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={() => incrementHandler(1)}>Increment</button>
        <button onClick={() => incrementHandler(5)}>Increse by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
    </>
  );

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {countComponent}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
