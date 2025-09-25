import { combineEpics } from 'redux-observable';
import { counterEpic } from './features/counterEpic';

export const rootEpic = combineEpics(counterEpic);