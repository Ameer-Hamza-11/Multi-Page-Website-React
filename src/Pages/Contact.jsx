import React, { useState } from 'react'

export const Contact = () => {

    const [formInputData, setFormInputData] = useState(null); // State to store form data

    const handleFormSubmit = (formData) => {
      const formInput = Object.fromEntries(formData.entries());
      setFormInputData(formInput); // Store form data in state
    }

  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-6xl font-bold text-center mb-12">Contact Us</h1>
          {/* Display form data in an <h1> tag */}
          {formInputData && (
          <h1 className="text-2xl font-semibold text-center mb-8">
            Submitted Data: <br />
            Name: {formInputData.username} <br />
            Email: {formInputData.email} <br />
            Message: {formInputData.message}
          </h1>
        )}
        <div className="max-w-lg mx-auto  p-8 rounded-lg shadow-lg">
          <form onSubmit={(e) => { e.preventDefault(); handleFormSubmit(new FormData(e.target)); }} className="space-y-6">
            
            <input
              type="text"
              className="w-full p-4 bg-black text-white placeholder-white rounded-lg border border-white focus:outline-none focus:ring-2 focus:ring-gray-600"
              required
              autoComplete="off"
              placeholder="Enter Your Name"
              name="username"
            />

            <input
              type="email"
              className="w-full p-4 bg-black text-white placeholder-white rounded-lg border border-white focus:outline-none focus:ring-2 focus:ring-gray-600"
              required
              autoComplete="off"
              placeholder="Enter Your Email"
              name="email"
            />

            <textarea
              className="w-full p-4 bg-black text-white placeholder-white rounded-lg border border-white focus:outline-none focus:ring-2 focus:ring-gray-600"
              rows="6"
              required
              autoComplete="off"
              placeholder="Enter Your Message"
              name="message"
            ></textarea>

            <button
              type="submit"
              className="w-full p-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black cursor-pointer transition duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
