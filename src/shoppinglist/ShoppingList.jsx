import React, { useState } from 'react';
import ShoppingListItem from './ShoppingListItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare, faHome } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function ShoppingList({list, name, solo}) {
    const [newItem, setNewItem] = useState('');
    
    const handleChange = function(event) {
        setNewItem(event.target.value);
    }

    const addItem = function() {
        list.add(newItem);
        setNewItem('');
    }

    return (
        <div className={'shoppingList' + (solo ? ' solo' : '')}>
            <h1>
                {name}
                { !solo &&
                    <Link to={`/list/${name}`}>
                        <FontAwesomeIcon icon={faShare} />
                    </Link>    
                }
                { solo &&
                    <Link to="/">
                        <FontAwesomeIcon icon={faHome} />
                    </Link>    
                }                
            </h1>
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