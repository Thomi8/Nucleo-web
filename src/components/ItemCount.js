import { useState } from "react";
import swal from 'sweetalert';

export default function ItemCount(props) {
    const [count, setCount] = useState(props.min);

    function decrement() {
        if (count !== props.min) {
            setCount(count - 1)
        } else {
            swal(`¡No puedes agregar menos de ${props.min} unidad!`);
        }
    }

    function increment() {
        if (count !== props.stock) {
            setCount(count + 1)
        } else {
            swal(`No puedes agregar más de ${props.stock} unidades`);
        }
    }

    function addToCart() {
        swal(`Se agregaron ${count} unidades al carrito`);
    }

    return (
        <div className="flex items-center justify-between w-full border-slate-900 border-2 rounded-md">
            <button className="mr-2 ml-2 px-3 py-2 text-black hover:bg-slate-400" onClick={decrement}>-</button>
            {count}
            <button className="ml-2 mr-2 px-3 py-2 text-black hover:bg-slate-400" onClick={increment}>+</button>

            <button
                type="submit"
                className="w-3/5 mt-0 w-full bg-slate-900 border border-transparent rounded py-2 px-1 flex items-center justify-center text-base font-medium text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo"
                onClick={addToCart}
            >
                Agregar al carrito
            </button>
        </div>
    );
}

