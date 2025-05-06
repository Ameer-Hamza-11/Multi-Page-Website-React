import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {Layout} from './Layout/Layout'
import { ErrorPage } from './Pages/ErrorPage'
import { Home } from './Pages/Home'
import { About } from './Pages/About'
import { Country } from './Pages/Country'
import { Contact } from './Pages/Contact'
import { CountryDetails } from './Pages/CountryDetails'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/about',
          element: <About/>
        },
        {
          path: '/country',
          element: <Country/>
        },
        {
          path: '/country/:id',
          element: <CountryDetails/>
        },
        {
          path: '/contact',
          element: <Contact/>
        },
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
