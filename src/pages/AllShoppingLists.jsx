import ShoppingListProvider from '../shoppinglist/ShoppingListProvider';
import { useSelector, useDispatch } from 'react-redux';
import { addList } from '../store/shoppingListsSlice';

const LIST_NAME = "Shopping List";

export default function AllShoppingLists() {

    const dispatch = useDispatch();

    const names = useSelector((state) => Object.keys(state.items).filter(key => key.startsWith(LIST_NAME)));
    const index = useSelector((state) => state.items.index);

    const newList = function() {
        window.console.log("new list called");
        const listName = LIST_NAME + " " + (index + 1);
        dispatch(addList({listName}));
    }

    return (
        <>
            { names.map((name, index) => (
                <ShoppingListProvider listName={name} key={index} />
            ))}
            <div className="actions">
                <button onClick={newList}>New List</button>
            </div>
        </>
    );
}