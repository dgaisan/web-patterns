import { combineEpics } from 'redux-observable';
import { counterEpic } from './features/counter/counterEpic';

export const rootEpic = combineEpics(counterEpic);