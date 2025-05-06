import React from 'react'
import about from '../Api/About.json'

export const About = () => {
  return (
    <section className='min-h-screen bg-black text-white px-6 md:px-20 py-10 w-full'>
      <h2 className='text-3xl md:text-5xl font-bold text-center mb-10'>
        Here are the Interesting Facts <br /> We're proud of
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {
          about.map((aboutCountry) => (
            <div key={aboutCountry.id} className='border border-white rounded-xl p-6 hover:scale-105 transition-transform duration-300 shadow-lg bg-gradient-to-r from-black via-gray-900 to-black hover:shadow-2xl'>
              <h1 className='text-2xl font-semibold mb-2'>{aboutCountry.countryName}</h1>
              <p className='mb-1'><span className="font-medium text-blue-400">Capital:</span> {aboutCountry.capital}</p>
              <p className='mb-1'><span className="font-medium text-green-400">Population:</span> {aboutCountry.population}</p>
              <p><span className="font-medium text-yellow-400">Interesting Fact:</span> {aboutCountry.interestingFact}</p>
            </div>
          ))
        }
      </div>
    </section>
  )
}
