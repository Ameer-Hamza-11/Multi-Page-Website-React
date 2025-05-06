import React, { useEffect, useState, useTransition } from 'react'
import { getData } from '../Api/CountryData'
import Loader from '../Components/UI/Loader'
import Card from '../Components/UI/Card'
import { SearchFilter } from '../Components/UI/SearchFilter'

export const Country = () => {
  const [isPending, startTransition] = useTransition()
  const [data, setData] = useState([])

  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    startTransition(async () => {
      try {
        const res = await getData()
        setData(res.data)
      } catch (error) {
        console.log(error);
      }
    })
  }, [])

  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase())
    }
    return true
  }

  const filterCountry = (country) => {
    if (filter === 'all') {
      return true
    }
    return country.region === filter
  }

  const search_Country = data.filter((country) => searchCountry(country) && filterCountry(country))

  if (isPending) return <Loader />

  return (
    <main className="bg-black min-h-screen text-white">

      {/* 🔍 Search & Filter Bar */}
      <div className="px-6 md:px-20 py-10">
        <SearchFilter
          search={search}
          setSearch={setSearch}
          filter={filter}
          setFilter={setFilter}
          data={data}
          setData={setData}
        />
      </div>


      {/* 🌍 Country Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-20 pb-20">
        {search_Country.map((country, index) => (
          <Card key={index} country={country} />
        ))}
      </section>

    </main>
  )
}
