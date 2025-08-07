import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'



const initialState ={
    weatherData: [],
    loading: false,
    error: null
}

//fetch weather data from weather api

export const fetchWeatherData = createAsyncThunk("weather/fetchWeatherData", async (cityName) => {
    const apiKey = "95ff24b9fcccc783f8d029d5f7c1541d"
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`)
    const data = await response.json()
    return data
})

const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers:{
        clearWeatherData: (state) =>{
            state.weatherData = []
        }
    },
    extraReducers:(builder) =>  {
        builder
        .addCase(fetchWeatherData.pending, (state)=>{
            state.loading = true
            state.error = null
        })
        .addCase(fetchWeatherData.fulfilled, (state, action)=>{
            state.loading = false
            state.weatherData.push(action.payload)
        })
        .addCase(fetchWeatherData.rejected,(state, action)=>{
            state.loading =false
            state.error = action.error.message
        })
    }
})

export const {clearWeatherData} = weatherSlice.actions
export default weatherSlice.reducer