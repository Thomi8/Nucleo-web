import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';


const onAdd = (cantidad) => {
  alert ("Agregaste " + cantidad + " elementos a tu carrito")
}


function App() {
  return (
    <>
    <ItemListContainer titulo="NÚCLEO" />
    <NavBar />
    <ItemCount stock={5} initial={1} onAdd={onAdd} />
    </>
  );
}

export default App;
