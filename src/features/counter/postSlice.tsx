import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk('post/fetxhPost', async () => {
    const res = await axios.get(`https://codingapple1.github.io/shop/data2.jso`);
    console.log(res)
    return Number(res.data[0].price);
})

interface postState {
    value: number,
    status: string
}

/* const initialState :postState = {
    value: 20000,
    status: 'Welcome'
} */

const initialState :any[] = [1, 2, 3];

export const fetchPost = createSlice({
    name: 'fetch',
    initialState ,
    reducers: {
        addItem: (state, action: PayloadAction<number>) => {
            state.push(action.payload)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state, action) => {
            //state.status = 'Loading';
        })
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.push(action.payload);
            //state.value = action.payload;
            //state.status = 'complete';
        })
        builder.addCase(fetchPosts.rejected, (state, action) => {
            alert('error')
            //state.status = 'fail'
        })
    }
})

export default fetchPost.reducer;
export const {addItem} = fetchPost.actions;