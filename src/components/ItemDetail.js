import React, {useState} from 'react'
import ItemCountDetail from "./ItemCountDetail";

export default function ItemDetail(props) {
    return (
        <div className="bg-white">
        <div className="pt-6">
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="overflow-hidden rounded-lg lg:block">
            <img
                src={props.item.imageSrc}
                alt={props.item.imageAlt}
                className="h-full w-full object-cover object-center"
            />
        </div>
        <div
            className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-1 lg:grid-rows-[auto] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{props.item.name}</h1>
            </div>
            <div
            className="py-3 lg:py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
            <div>
                <h3 className="sr-only">Description</h3>
                <div className="space-y-6">
                    <p className="text-base text-gray-900">{props.item.descripcion}</p>
                </div>
            </div>
            </div>
            <div className="mt-4 lg:row-span-3 lg:mt-0">
                <h2 className="sr-only">Info del producto</h2>
                <p className="text-3xl tracking-tight text-gray-900">{props.item.price}</p>
                <div className="flex flex-col items-center mt-6 mb-0">
                <ItemCountDetail stock={props.item.stock} min={props.item.min}/>
            </div>
        </div>
        </div>
    </div>
    </div>
    </div>
    )
}
