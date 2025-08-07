import { configureStore, createAsyncThunk } from '@reduxjs/toolkit'
import weatherReduce from '../redux/features/weather/weatherSlice'
import { createLogger } from 'redux-logger'
import { thunk } from 'redux-thunk'

    


const logger = createLogger();

const store = configureStore({
    reducer: {
        weather: weatherReduce
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(logger)
});

export default store