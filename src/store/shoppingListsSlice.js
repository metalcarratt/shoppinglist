import { createSlice } from '@reduxjs/toolkit';

export const itemsSlice = createSlice({
    name: 'items',
    initialState: {
        "Shopping List 1": ['Milk', 'Bread', 'Bottled water'],
        index: 1
    },
    reducers: {
        addList: (state, action) => {
            state[action.payload.listName] = [];
            state.index++;
        },

        addItem: (state, action) => {
            state[action.payload.listName].push(action.payload.item)
        },

        undo: (state, action) => {
            state[action.payload.listName].pop();
        },

        removeItem: (state, action) => {
            const startIndex = state[action.payload.listName].indexOf(action.payload.item);
            state[action.payload.listName].splice(startIndex, 1);
        }
    }
});

export const { addItem, undo, removeItem, addList } = itemsSlice.actions;

export default itemsSlice.reducer;