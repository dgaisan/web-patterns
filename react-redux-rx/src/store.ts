import { configureStore } from "@reduxjs/toolkit";
import { createEpicMiddleware } from "redux-observable";
import { rootReducer } from "./rootReducer";
import { rootEpic } from "./rootEpic";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefault) =>
    getDefault({ thunk: false })
      .concat(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const epicMiddleware = createEpicMiddleware<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  any,
  RootState // State type
>();

store.replaceReducer(rootReducer);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(store as any).dispatch = store.dispatch;

epicMiddleware.run(rootEpic);
