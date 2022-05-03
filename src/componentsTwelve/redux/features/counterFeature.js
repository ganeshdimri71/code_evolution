import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    count: 0
}

let counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        increment: (state, action) => {
            state.count = state.count + 1
        },
        decrement: (state, action) => {
            state.count = state.count - 1
        },
        incrementByFive: (state, action) => {
            state.count = state.count + action.payload
        }
    }
})

export const { increment, decrement, incrementByFive } = counterSlice.actions
export default counterSlice.reducer