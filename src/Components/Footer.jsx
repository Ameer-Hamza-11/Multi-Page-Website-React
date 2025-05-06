import React from 'react'
import footer from '../Api/FooterApi.json'
import { MdPlace } from 'react-icons/md'
import { IoCallSharp } from 'react-icons/io5'
import { TbMailPlus } from 'react-icons/tb'
import { NavLink } from 'react-router-dom'

export const Footer = () => {
  const iconData = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />,
  }

  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {
          footer.map((footerItem, index) => {
            const { icon, title, details } = footerItem;
            return (
              <div className="flex items-start space-x-4" key={index}>
                <div className="text-blue-400 text-3xl">
                  {iconData[icon]}
                </div>
                <div className="footer-contact-text">
                  <p className="font-semibold text-lg">{title}</p>
                  <p className="text-sm">{details}</p>
                </div>
              </div>
            )
          })
        }
      </div>

      <div className="bg-gray-900 py-4 mt-10">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 px-6">
          <div className="text-center sm:text-left">
            <p>
              Copyright &copy; 2025, All Right Reserved 
              <NavLink to="/" className="text-blue-400 hover:text-blue-500"> Ameer Hamza</NavLink>
            </p>
          </div>

          <div className="footer-menu">
            <ul className="flex justify-center sm:justify-end space-x-6 text-lg">
              <li>
                <NavLink to="/" className="hover:text-blue-400">Home</NavLink>
              </li>
              <li>
                <NavLink to="/" target="_blank" className="hover:text-blue-400">Social</NavLink>
              </li>
              <li>
                <NavLink to="/" target="_blank" className="hover:text-blue-400">Source Code</NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="hover:text-blue-400">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
