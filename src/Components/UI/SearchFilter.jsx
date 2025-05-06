import React from 'react'

export const SearchFilter = ({ search, setSearch, filter, setFilter,data,setData }) => {

    const handleSearchData = (e) => {
        setSearch(e.target.value)
    }

    const handleSelectChange = (e) => {
        setFilter(e.target.value)
    }
    const sortCountries = (value) => {
        const sortCountry = [...data].sort((a, b) => {
            return value === 'asc'
                ? a.name.common.localeCompare(b.name.common)
                : b.name.common.localeCompare(a.name.common);
        });
        setData(sortCountry);
    };

    return (
        <section className="w-full flex flex-col md:flex-row items-center justify-between gap-6 px-6 md:px-20 py-8 bg-gradient-to-r from-gray-900 via-black to-gray-900 rounded-xl shadow-xl">

            {/* Search Input */}
            <div className="w-full md:w-2/3">
                <input
                    type="text"
                    placeholder="Search by country name..."
                    value={search}
                    onChange={handleSearchData}
                    className="w-full px-5 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 shadow-md"
                />
            </div>
            <div className="flex gap-4">
    <button
        onClick={() => sortCountries("asc")}
        className="px-5 py-2 rounded-lg bg-teal-600 hover:bg-teal-500 text-white shadow-md transition duration-300 ease-in-out"
    >
        Asc
    </button>
    <button
        onClick={() => sortCountries("des")}
        className="px-5 py-2 rounded-lg bg-rose-600 hover:bg-rose-500 text-white shadow-md transition duration-300 ease-in-out"
    >
        Desc
    </button>
</div>
            {/* Region Filter Dropdown */}
            <div className="w-full md:w-1/3">
                <select
                    value={filter}
                    onChange={handleSelectChange}
                    className="w-full px-5 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-400 shadow-md"
                >
                    <option value="all">All Regions</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>

        </section>
    )
}
