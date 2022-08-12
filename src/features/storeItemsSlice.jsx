import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
}

export const storeItemsSlice = createSlice({
    name: 'storeItemsSlice',
    initialState,
    reducers: {}
})

export default storeItemsSlice.reducer