import React from 'react'
import { NavLink } from 'react-router-dom'

export const Card = ({ country }) => {
  return (
    <div className='bg-gradient-to-r from-black via-gray-900 to-black text-white border border-gray-800 rounded-xl p-6 hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-2xl'>
      
      <figure className='mb-4'>
        <img
          src={country.flags.svg}
          alt={`${country.name.common} flag`}
          className="w-full h-40 object-cover rounded-md"
        />
      </figure>

      <div className='space-y-2'>
        <h1 className='text-xl font-bold mb-1'>{country.name.common}</h1>
        <p><span className="text-gray-400">Population:</span> {country.population.toLocaleString()}</p>
        <p><span className="text-gray-400">Region:</span> {country.region}</p>
        <p><span className="text-gray-400">Capital:</span> {country.capital}</p>
      </div>

      <NavLink to={`/country/${country.name.common}`}>
        <button className='mt-4 w-full py-2 px-4 bg-black text-white border border-gray-700 rounded-md hover:bg-gray-800 transition duration-300'>
          Explore More
        </button>
      </NavLink>
    </div>
  )
}

export default Card
