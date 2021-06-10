import React, { useState } from 'react';
import ShoppingListItem from './ShoppingListItem';

export default function ShoppingList({list, name}) {
    const [newItem, setNewItem] = useState('');
    
    const handleChange = function(event) {
        setNewItem(event.target.value);
    }

    const addItem = function() {
        list.add(newItem);
        setNewItem('');
    }

    return (
        <div className="shoppingList">
            <h1>{name}</h1>
            <ul>
                { list.items.map((item, itemIndex) => (
                    <ShoppingListItem
                        index={itemIndex + 1}
                        key={itemIndex}
                        item={item}
                        onClick={() => list.remove(item)}
                    />
                ))}
            </ul>
            <div className="newItem">
                <input type="text" value={newItem} onChange={handleChange} placeholder="New Item" />
                <button onClick={addItem}>Add</button>
                <button onClick={() => list.undo()}>Undo</button>
            </div>
        </div>
    );
}