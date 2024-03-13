import React from 'react'
import Navbar from '../componant/Navbar'
import Restaurant from '../componant/Restaurant';
import "./RestaurantPage.css"

const RestaurantPage = () => {
  return (
    <div>
      <Navbar/>
      <Restaurant className="rest"/>
    </div>
  )
}

export default RestaurantPage;
