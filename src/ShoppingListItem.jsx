export default function ShoppingListItem({index, item, onClick}) {
    return (
        <li key={item} onClick={() => onClick()}>
            <span className="ordinal">{ index + '. ' }</span>
            <span className="title">{ item }</span>
        </li>
    );
}