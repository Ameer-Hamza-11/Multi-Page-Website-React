import React from 'react'
import { NavLink, useNavigate, useRouteError } from 'react-router-dom'

export const ErrorPage = () => {
    const error = useRouteError()
    console.log(error);
    const navigate = useNavigate()

    if (error.status === 404) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4 text-center">
            <h1 className="text-6xl font-extrabold text-red-500 animate-bounce mb-4">
                404
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Oops! Page Not Found
            </h2>
            <p className="text-lg text-gray-300 mb-6">
                The page you are looking for doesn’t exist or an error occurred.
            </p>
            <NavLink
                to="/"
                className="px-6 py-3 bg-red-500 hover:bg-red-600 rounded-full text-white font-semibold transition duration-300 ease-in-out"
            >
                🔙 Go Back Home
            </NavLink>
            <NavLink
               onClick={()=> navigate(-1)}
                className="px-6 py-3 mt-1.5 bg-red-500 hover:bg-red-600 rounded-full text-white font-semibold transition duration-300 ease-in-out"
            >
                🔙 Go Back To Previous Page
            </NavLink>
        </div>

            // <div className='flex items-center justify-center h-svh'>
            //     <div className='container h-full m-auto border flex flex-col justify-center items-center'>
            //         <figure>
            //             <img src="https://img.freepik.com/free-vector/tiny-programmers-working-with-system-error-computer-monitor-internet-flat-vector-illustration-programming-it-digital-technology_74855-8632.jpg?ga=GA1.1.875324178.1734968905&semt=ais_hybrid&w=740" alt="" />
            //         </figure>
            //         <NavLink to='/'>
            //             <button className='bg-[#82C7E6] text-[#FF3D3C] py-5 px-2 cursor-pointer rounded-[5px] font-bold border border-[#49C1A3] text-[18px]'>Back To Home Page</button>
            //         </NavLink>
            //     </div>
            // </div>
        )
    }
    return (
          <div className='flex items-center justify-center h-svh'>
                <div className='container h-full m-auto border flex flex-col justify-center items-center'>
                    <figure>
                        <img src="https://img.freepik.com/free-vector/tiny-programmers-working-with-system-error-computer-monitor-internet-flat-vector-illustration-programming-it-digital-technology_74855-8632.jpg?ga=GA1.1.875324178.1734968905&semt=ais_hybrid&w=740" alt="" />
                    </figure>
                    <NavLink to='/'>
                        <button className='bg-[#82C7E6] text-[#FF3D3C] py-5 px-2 cursor-pointer rounded-[5px] font-bold border border-[#49C1A3] text-[18px]'>Back To Home Page</button>
                    </NavLink>
                </div>
            </div>
    )
}

