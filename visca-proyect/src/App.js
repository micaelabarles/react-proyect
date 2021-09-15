import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart'
import {CartContextProvider} from './components/CartContext'

function App() {
  return (

  <CartContextProvider>
    <Router>
      <Navbar />
      <hr></hr>
      <Switch>
        <Route exact path='/'>
          <ItemListContainer />
        </Route>
        <Route exact path='/category/:category'>
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
  </CartContextProvider>
  );
}

export default App;
