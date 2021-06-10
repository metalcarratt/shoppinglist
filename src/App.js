import ShoppingList from './ShoppingList';
import store from './store/store.js';
import { Provider } from 'react-redux';
import './ShoppingList.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ShoppingList />
      </div>
    </Provider>
  );
}

export default App;
