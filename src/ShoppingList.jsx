import React, { useState } from 'react';
import './ShoppingList.css';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, undo, removeItem } from './store/itemsSlice';

export default function ShoppingList() {
    const items = useSelector((state) => state.items);

    const dispatch = useDispatch();

    const [newItem, setNewItem] = useState('');
    
    const handleChange = function(event) {
        setNewItem(event.target.value);
    }

    const addItemInt = function() {
        dispatch(addItem(newItem))
        setNewItem('');
    }

    return (
        <div className="shoppingList">
            <h1>Shopping List</h1>
            <ul>
                { 
                    items.map((item, itemIndex) => (
                        <li key={item} onClick={() => dispatch(removeItem(item))}>
                            <span className="ordinal">{ (itemIndex + 1) + '. ' }</span>
                            <span className="title">{ item }</span>
                        </li>
                    ))}
            </ul>
            <div className="newItem">
                <input type="text" value={newItem} onChange={handleChange} placeholder="New Item" />
                <button onClick={addItemInt}>Add</button>
                <button onClick={() => dispatch(undo())}>Undo</button>
            </div>
        </div>
    );
}