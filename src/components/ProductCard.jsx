import React from 'react'
import { Link } from 'react-router'

function ProductCard({id, image, title, price}) {
    return (
        <>
        
            <Link 
                 to={`/product/${id}`}
                key={id}
                className="h-90 w-[22%]  min-w-62 rounded-xl  border-gray-400 p-2 shadow-[0px_0px_4px_gray] hover:shadow-[0px_0px_8px_red] hover:-translate-y-4 transition-all duration-300">

                <div className="bg-blue-200 h-70 rounded p-7">
                    <img
                        src={image}
                        alt=""
                        className="w-full h-full" />
                </div>
                <div className="">
                    <p className="line-clamp-1">{title}</p>
                    <p className="text-red-500">$ {price}</p>
                </div>

            </Link>

        </>
    )
}

export default ProductCard