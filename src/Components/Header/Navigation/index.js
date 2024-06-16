import React from 'react'
import { Button } from "@mui/material";
import { CgMenuRight } from "react-icons/cg";
import { FaChevronDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { IoHomeOutline } from "react-icons/io5";

const Navigation = () => {
  return (
    <nav>

    <div className="container">
      <div className="row">
        <div className="col-sm-3 navPart1">
          <Button className='allCatTab align-items-center'>
            <span className='icon1 mr-2'><CgMenuRight /></span>
           <span class="text">All Categories</span>
           <span className='icon2 ml-2'><FaChevronDown /></span>
            
          </Button>
        </div>

        <div className="col-sm-9 navPart2 d-flex align-items-center">
            <ul className='list list-inline ml-auto'>
                <li className='list-inline-item'><Link to= '/'> <IoHomeOutline /> &nbsp; Home</Link></li>
                <li className='list-inline-item'><Link to= '/'>Shops</Link></li>
                <li className='list-inline-item'><Link to= '/'>Electronics</Link></li>
                <li className='list-inline-item'><Link to= '/'>Grocery</Link></li>
                <li className='list-inline-item'><Link to= '/'>Bakery</Link></li>
                <li className='list-inline-item'><Link to= '/'>Blog</Link></li>
                <li className='list-inline-item'><Link to= '/'>Contact Us</Link></li>
            </ul>
        </div>
      </div>

    </div>

  </nav>
  )
}

export default Navigation ;
