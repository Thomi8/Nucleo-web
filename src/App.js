import './App.css';
<<<<<<< HEAD
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greetings="¡Encontrá aquí los mejores lentes!" />
    </div>
=======
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
>>>>>>> ffe8f76d390b0e5ec9121da8f6ab061ee30756fc
  );
}

export default App;
