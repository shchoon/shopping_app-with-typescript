import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import itemReducer from '../features/counter/itemSlice'
import postReducer from '../features/counter/postSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        item: itemReducer,
        fetch: postReducer
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>