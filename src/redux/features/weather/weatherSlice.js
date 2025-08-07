import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'



const initialState ={
    weatherData: [],
    loading: false,
    error: null
}

//fetch weather data from weather api

const fetchWeatherData = createAsyncThunk("weather/fetchWeatherData", async () => {
    const response
})

const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers:{}
})