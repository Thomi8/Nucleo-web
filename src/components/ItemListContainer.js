import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { productsData } from "../utils/productsData";
import queryData from "../utils/queryData";

export default function ItemListContainer(props) {

    const [products, setProducts] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            queryData(productsData.filter(item => item.categoryId === id))
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
            {
                products.length > 0 ?
                    <ItemList items={products} />
                    :
                    <div className="flex justify-center items-center min-h-[50vh] w-screen">
                        <div className="spin text-xl"></div>
                    </div>
            }
        </div>
    );
}
