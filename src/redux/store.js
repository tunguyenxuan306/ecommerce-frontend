import { configureStore } from '@reduxjs/toolkit';
import counterReduce from '../redux/slides/counterSilde'

export const store = configureStore({
    reducer: {
        counter: counterReduce,
    },
})