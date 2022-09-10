import React from 'react'
import "../Style/Home.css"
import Footer from './Footer'
import Navbar from './Navbar'
const Home = () => {
  return (
    <div className='Home'>
      
        <div>
        <Navbar/>
        </div>
        <div></div>
        <div>
        <Footer/> 
        </div>
    </div>
  )
}

export default Home