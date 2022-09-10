import ItemCount from "./ItemCount";
import { Link } from 'react-router-dom'

export default function Item(props) {
    return (
        <div className="flex flex-col">
            <div className="group relative">
                <div
                    className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                    <img
                        src={props.imageSrc}
                        alt={props.imageAlt}
                        className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                    />
                </div>
                <div className="mt-4 flex justify-between">
                    <div>
                        <h3 className="text-sm text-gray-700">
                            <a href={props.href}>
                                <span aria-hidden="true" className="absolute inset-0" />
                                {props.name}
                            </a>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">{props.brand}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">{props.price}</p>
                </div>
            </div>
            <div className="flex flex-col items-center mt-3">
                <ItemCount stock={props.stock} min={props.min} />
            </div>
            <Link to={`/item/${props.id}`}>Ver detalles</Link>
        </div>
    );
}
