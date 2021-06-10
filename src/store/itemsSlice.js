import { createSlice } from '@reduxjs/toolkit';

export const itemsSlice = createSlice({
    name: 'items',
    initialState: [
        'Milk', 'Bread', 'Bottled Water'
    ],
    reducers: {
        addItem: (state, action) => {
            state.push(action.payload)
        },

        undo: (state) => {
            state.pop();
        },

        removeItem: (state, action) => {
            state.splice(state.indexOf(action.payload), 1);
        }
    }
});

export const { addItem, undo, removeItem } = itemsSlice.actions;

export default itemsSlice.reducer;