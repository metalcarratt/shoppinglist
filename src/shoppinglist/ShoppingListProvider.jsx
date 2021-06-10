import ShoppingList from './ShoppingList';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, undo, removeItem } from '../store/shoppingListsSlice';

export default function ShoppingListProvider({listName, solo}) {
    window.console.log(`ShoppingListProvider with listName=${listName}`);
    const items = useSelector((state) => state.items[listName]);
    const dispatch = useDispatch();

    const list = {
        items,

        add(item) {
            dispatch(addItem({item, listName}));       
        },

        remove(item) {
            dispatch(removeItem({item, listName}));
        },

        undo() {
            dispatch(undo({listName}));
        }
    }

    return (
        <ShoppingList list={list} name={listName} solo={solo} />
    );
}