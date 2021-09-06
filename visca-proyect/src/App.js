import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <div>
     <Navbar />
     <hr></hr>
     <ItemListContainer />
     <ItemDetailContainer />
    </div>
  );
}

export default App;
