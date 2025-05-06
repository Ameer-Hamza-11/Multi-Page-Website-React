import React from 'react'
import { Header } from '../Components/Header'
import { Outlet } from 'react-router-dom'
import { Footer } from '../Components/Footer'

export const Layout = () => {
  return (
    <>
     <Header/>
     <Outlet/>
     <Footer/> 
    </>
  )
}

