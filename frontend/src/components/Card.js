import React from 'react'
import { Link } from 'react-router-dom'

import baseUrl from '../baseUrl'

const Card = ({id, title, primaryImg}) => {
  return (
    <div>
        <Link to={`/product/${id}`}>
            <div className="group relative ">
                <div className="w-full min-h-80 bg-white aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                    src={`${baseUrl}${primaryImg}/`}
                    alt="Front of men&#039;s Basic Tee in black."
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
                </div>
                <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-md text-gray-700">
                    <a href="#">
                        <span aria-hidden="true" className="absolute inset-0 text-center"></span>
                        {title}
                    </a>
                    </h3>
                </div>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default Card