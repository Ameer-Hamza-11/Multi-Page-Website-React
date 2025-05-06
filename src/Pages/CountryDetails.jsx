import React, { useEffect, useState, useTransition } from 'react'
import { getMoreData } from '../Api/CountryData'
import Loader from '../Components/UI/Loader'
import { NavLink, useParams } from 'react-router-dom'

export const CountryDetails = () => {
  const [isPending, startTransition] = useTransition()
  const [moreData, setMoreData] = useState(null)
  const param = useParams()

  useEffect(() => {

     setMoreData(null);
    startTransition(async () => {
      try {
        const res = await getMoreData(param.id)
        if (res.status === 200) {
          setMoreData(res.data[0])
        }
      } catch (error) {
        console.log(error)
      }
    })
  }, [param.id])
  console.log(param);
  

  if (isPending) return <Loader />

  return (
    <section className="min-h-screen bg-black text-white px-6 md:px-20 py-10">
  {moreData && (
    <div className="flex flex-col lg:flex-row gap-10 items-stretch">

      {/* Flag */}
      <div className="w-full lg:w-1/2">
        <img
          src={moreData.flags.svg}
          alt={`${moreData.name.common} flag`}
          className="w-full h-full object-cover rounded-xl shadow-2xl"
        />
      </div>

      {/* Info */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-teal-400 mb-6">
          {moreData.name.official}
        </h1>

        <p className="text-lg md:text-xl">
          <span className="font-semibold text-white">Native Names:</span> {Object.keys(moreData.name.nativeName).map(key => moreData.name.nativeName[key].common).join(', ')}
        </p>

        <p className="text-lg md:text-xl">
          <span className="font-semibold text-white">Population:</span> {moreData.population.toLocaleString()}
        </p>

        <p className="text-lg md:text-xl">
          <span className="font-semibold text-white">Region:</span> {moreData.region}
        </p>

        <p className="text-lg md:text-xl">
          <span className="font-semibold text-white">Sub Region:</span> {moreData.subregion}
        </p>

        <p className="text-lg md:text-xl">
          <span className="font-semibold text-white">Capital:</span> {moreData.capital}
        </p>

        <p className="text-lg md:text-xl">
          <span className="font-semibold text-white">Top Level Domain:</span> {moreData.tld[0]}
        </p>

        <p className="text-lg md:text-xl">
          <span className="font-semibold text-white">Currencies:</span> {Object.keys(moreData.currencies).map(cur => moreData.currencies[cur].name).join(', ')}
        </p>

        <p className="text-lg md:text-xl">
          <span className="font-semibold text-white">Languages:</span> {Object.keys(moreData.languages).map(key => moreData.languages[key]).join(', ')}
        </p>
      </div>

    </div>
  )}

  {/* Move button to right and enhance it */}
  <div className="flex justify-end mt-10">
    <NavLink to='/country'>
      <button className="px-8 py-4 bg-black border border-3 border-white font-bold text-white rounded-xl shadow-lg hover:bg-teal-600 focus:ring-4 focus:ring-teal-300 transition duration-300 transform hover:scale-105">
        ⬅ Go Back
      </button>
    </NavLink>
  </div>
</section>

  )
}
