import { ofType, type Epic } from 'redux-observable';
import { delay, map } from 'rxjs/operators';
import { increment, incrementByAmount } from './counterSlice';
import { type RootState } from '../store';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const counterEpic: Epic<any, any, RootState> = (action$) =>
  action$.pipe(
    ofType(increment.type),
    delay(2000),
    map(() => incrementByAmount(5))
  );