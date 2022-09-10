import './App.css';
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Cart from "./components/Cart";

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/' element={<ItemListContainer greetings="¡Encontrá aquí los mejores lentes!" />} />
                <Route path='/category/:id' element={<ItemListContainer />} />
                <Route path='/item/:id' element={<ItemDetailContainer />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;