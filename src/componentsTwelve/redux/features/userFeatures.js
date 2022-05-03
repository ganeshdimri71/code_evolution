import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    users: [],
    errorMessage: "",


}

export const getAllUsers = createAsyncThunk(`users/getAllUsers`, async () => {
    let dataUrl = `https://jsonplaceholder.typicode.com/users`;
    let response = await axios.get(dataUrl)
    return response.data
})


const userListSlice = createSlice({
    name: 'users',
    initialState: initialState,
    extraReducers: {
        [getAllUsers.pending]: (state) => {
            state.isLoading = true
        },
        [getAllUsers.fulfilled]: (state, action) => {
            state.isLoading = false
            state.users = action.payload
        },
        [getAllUsers.rejected]: (state) => {
            state.isLoading = false
            state.errorMessage = 'Oops! Something Goes Wrong...!'
        },
    }
})


export default userListSlice.reducer