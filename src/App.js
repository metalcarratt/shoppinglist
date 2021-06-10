
import AllShoppingLists from './pages/AllShoppingLists';
import SpecificShoppingList from './pages/SpecificShoppingList';
import store from './store/store.js';
import { Provider } from 'react-redux';
import './ShoppingList.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/list/:listName">
              <SpecificShoppingList />
            </Route>
            <Route path="/">
              <AllShoppingLists />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
