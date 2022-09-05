import './App.css';
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
    return (
        <div className="App">
            <NavBar />
            {/* <ItemListContainer greetings="¡Encontrá aquí los mejores lentes!" /> */}
            <ItemDetailContainer />
        </div>
    );
}

export default App;