import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        //increment
        increment(state) {
            state.value += 1;
        },
        //decrement
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
          }
        //upset
    }
})

export const { increment, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;