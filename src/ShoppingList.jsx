import React, { useState } from 'react';
import './ShoppingList.css';

export default function ShoppingList() {
    const [newItem, setNewItem] = useState('');
    const [items, setItems] = useState([
        'Milk', 'Bread', 'Bottled Water'
    ]);
    
    const handleChange = function(event) {
        setNewItem(event.target.value);
    }

    const addItem = function() {
        setItems(currentItems => [...currentItems, newItem]);
        setNewItem('');
        window.console.log(items);
    }

    const undo = function() {
        setItems(currentItems => currentItems.filter((iterItem, iter) => iter !== currentItems.length - 1));
    }

    const removeItem = function(item) {
        window.console.log(`remove item ${item} called`);
        setItems(currentItems => currentItems.filter(iterItem => iterItem !== item));
    }

    return (
        <div className="shoppingList">
            <h1>Shopping List</h1>
            <ul>
                { items.map((item, itemIndex) => (
                    <li key={item} onClick={() => removeItem(item)}>
                        <span className="ordinal">{ (itemIndex + 1) + '. ' }</span>
                        <span className="title">{ item }</span>
                    </li>
                ))}
            </ul>
            <div className="newItem">
                <input type="text" value={newItem} onChange={handleChange} placeholder="New Item" />
                <button onClick={addItem}>Add</button>
                <button onClick={undo}>Undo</button>
            </div>
        </div>
    );
}