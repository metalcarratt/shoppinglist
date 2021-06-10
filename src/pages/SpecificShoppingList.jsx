import ShoppingListProvider from '../shoppinglist/ShoppingListProvider';
import { useParams } from 'react-router-dom';

export default function SpecificShoppingList() {
    const { listName } = useParams();
    return (
        <ShoppingListProvider listName={listName} solo={true} />
    );
}