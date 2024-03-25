import React from 'react'
import Navbar from '../componant/Navbar'
import Footer from '../componant/Footer'

const FoodPage = () => {
  return (
    <div>
        <Navbar/>
            <div style={{
                textAlign:"center",
                margin:'2rem',
                fontSize:'25px'
            }}>
                This is food page
            </div>
        <Footer/>
    </div>
  )
}

export default FoodPage
