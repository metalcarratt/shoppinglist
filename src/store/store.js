import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from './shoppingListsSlice';

export default configureStore({
    reducer: {
        items: itemsReducer
    }
});