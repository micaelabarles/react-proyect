import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <Router>
      <Navbar />
      <hr></hr>
      <Switch>
        <Route exact path='/'>
          <ItemListContainer />
        </Route>
        <Route exact path='/detalle'>
          <ItemDetailContainer />
        </Route>
     </Switch>
    </Router>
  );
}

export default App;
