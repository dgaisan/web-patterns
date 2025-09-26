import type { RootState } from "../../store";
import { decrement, increment } from "./counterSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";

export const Counter = () => {
  const count = useAppSelector((state: RootState) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Counter</h1>
      <p className="mb-4">Count: {count}</p>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <button
        className="px-4 py-2 bg-red-500 text-white rounded"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  );
};
