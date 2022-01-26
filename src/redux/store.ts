import { Action, applyMiddleware, createStore } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { rootReducer } from './reducer/rootReducer';

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk as ThunkMiddleware<typeof rootReducer, Action>)
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
