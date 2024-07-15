import React from 'react'
import { GiFruitBowl } from "react-icons/gi";
import { IoPricetagOutline } from "react-icons/io5";
import { TbShoppingBagDiscount } from "react-icons/tb";
import { TbTruckDelivery } from "react-icons/tb";

const footer = () => {
  return (
    <footer>
      

<div className="container">
   <div className="topInfo row">
    <div className="col">
        <span className='ml-2'><GiFruitBowl /></span>
      <span className='ml-2'>Everyday fresh products</span> 
    </div>

    <div className="col">
        <span className='ml-2'><IoPricetagOutline /></span>
      <span className='ml-2'>
      Best price on the market</span> 
    </div>

    <div className="col">
        <span className='ml-2'><TbShoppingBagDiscount /></span>
      <span className='ml-2'>Daily Mega Discounts</span> 
    </div>

    <div className="col">
        <span className='ml-2'><TbTruckDelivery /></span>
      <span className='ml-2'>Free delivery for order over 1000 Rs</span> 
    </div>
   </div>
   
</div>


    </footer>
  )
}

export default footer
