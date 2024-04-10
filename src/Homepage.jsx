import React from 'react'
import Navbar from './Home/navbar'
import Herosection from './Home/herosection'
import Index from './Home'
import Footer from './Home/footer'

const Homepage = () => {
  return (
    <div>
        <Navbar/>
        <Herosection/>
        <Index/>
        <Footer/>
   {/* End Header */}
    {/* ======= Hero Section ======= */}
    {/* End Hero Section */}
    {/* End #main */}
    {/* ======= Footer ======= */}
   {/* End  Footer */}
    {/* <div id="preloader" /> */}
    <a href="#" className="back-to-top d-flex align-items-center justify-content-center">
      <i className="bi bi-arrow-up-short" /></a>
  </div>

  )
}

export default Homepage