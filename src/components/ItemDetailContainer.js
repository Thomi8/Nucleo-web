import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import queryData from "../utils/queryData";
import { productsData } from "../utils/productsData";

export default function ItemDetailContainer() {
    const [oneProduct, setOneProduct] = useState();
    const { id } = useParams();

    useEffect(() => {
        queryData(productsData.find(item => item.id == id))
            .then(result => setOneProduct(result))
            .catch(err => console.log(err))
    }, [])
    return (
        oneProduct ? <ItemDetail item={oneProduct} /> :
            <div className="flex justify-center items-center min-h-[70vh] w-screen">
                <div className="spin"></div>
            </div>
    )
}
