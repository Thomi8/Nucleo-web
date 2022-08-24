import {useEffect,useState} from "react";
const ItemCount = ({stock = 0, initial = 1, onAdd}) => {
    const [count, setCount] = useState (0)
    
    useEffect(() => {
        setCount(initial);
}, []);

const increment = () =>{
    if (count<stock){
        setCount (count + 1)
    }
};

const decrement = () => {
    if (count>initial){
        setCount (count - 1)
    }
};

return (
        <>
            <div className="count">
                <button onClick={increment}> + </button>
                <h3>{count}</h3>
                <button onClick={decrement}> - </button>
                <button onClick={() => onAdd(count)}>Agregar</button>
            </div>
        </>
    );
}

export default ItemCount;