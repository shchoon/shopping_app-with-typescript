import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface itemState {id: number | undefined, title: string, content: string , price: number | undefined, }

export const fetchItems = createAsyncThunk('fetch/items', async (num: number) => {
  const res = await axios.get(`https://codingapple1.github.io/shop/data${num}.json`);
  if(res.status === 200){
    return res.data;
  }

})

const initialState: itemState[] = [
    {
        id : 0,
        title : "White and Black",
        content : "Born in France",
        price : 120000,
      },
      {
        id : 1,
        title : "Red Knit",
        content : "Born in Seoul",
        price : 110000,
      },
      {
        id : 2,
        title : "Grey Yordan",
        content : "Born in the States",
        price : 130000,
      }
];

const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<itemState>) => {
            state.push(action.payload);
        }
    },
    extraReducers: (builder) => {
      builder.addCase(fetchItems.pending, (state, action) => {
        //state[initialState.length].status = 'Loading';
      })
      builder.addCase(fetchItems.fulfilled, (state, action) => {
        state.push(...action.payload);
        //state[initialState.length].status = 'Complete';
      })
      builder.addCase(fetchItems.rejected, (state, action) => {
        alert('error')
      })
    },
})

export const {addItem} = itemSlice.actions;
export default itemSlice.reducer