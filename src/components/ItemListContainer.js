import React, { useState, useEffect } from "react";
import queryData from "../utils/queryData";
import { productsData } from "../utils/productsData";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

export default function ItemListContainer(props) {

    const [products, setProducts] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            queryData(productsData.filter(item => item.categoryId == id))
                .then(result => setProducts(result))
                .catch(err => console.log(err))
        } else {
            queryData(productsData)
                .then(result => setProducts(result))
                .catch(err => console.log(err))
        }
    }, [id]);

    return (
        <div className="div-construction pt-0 min-h-[90vh] flex flex-col justify-start items-center">
            <h1 className="text-3xl mt-12">{props.greetings}</h1>
            <ItemList items={products} />
        </div>
    );
}
