import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart'
function App() {
  return (
    <Router>
      <Navbar />
      <hr></hr>
      <Switch>
        <Route exact path='/'>
          <ItemListContainer />
        </Route>
        <Route exact path='/category/:id'>
          <ItemListContainer />
        </Route>
        <Route exact path='/item/:id'>
          <ItemDetailContainer />
        </Route>
        <Route exact path='/cart'>
          <Cart />
        </Route>
     </Switch>
    </Router>
  );
}

export default App;
