import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { AuthReducer } from './reducers/auth/AuthReducer';
 

export const rootReducer = combineReducers({
  auth: AuthReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
 
});
