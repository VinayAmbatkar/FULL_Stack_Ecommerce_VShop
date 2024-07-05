import React from 'react'
import { Button } from "@mui/material";
import { CgMenuRight } from "react-icons/cg";
import { FaChevronDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { IoHomeOutline } from "react-icons/io5";
import { CiShop } from "react-icons/ci";
import { RiContactsLine } from "react-icons/ri";
import { FaBlog } from "react-icons/fa";

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

        <div className="col-sm-10 navPart2 d-flex align-items-center">
            <ul className='list list-inline ml-auto'>
                <li className='list-inline-item'><Link to= '/'> <IoHomeOutline /> &nbsp; Home</Link><div className="submenu shadow">
                  <Link to= '/'> <CiShop /> &nbsp; New Arrivals</Link>
                  <Link to= '/'> <CiShop /> &nbsp; Best Sellers</Link>
                  <Link to= '/'> <CiShop /> &nbsp; Special Offers</Link>
                  <Link to= '/'> <CiShop /> &nbsp; Trending</Link>
                  <Link to= '/'> <CiShop /> &nbsp; Featured Products</Link>
                  </div>
                </li>
                <li className='list-inline-item'><Link to= '/'> <CiShop /> &nbsp; Shops</Link></li>
                <li className='list-inline-item'><Link to= '/'> &nbsp;Electronics</Link></li>
                <li className='list-inline-item'><Link to= '/'>&nbsp;Grocery</Link></li>
                <li className='list-inline-item'><Link to= '/'>&nbsp;Bakery</Link></li>
                <li className='list-inline-item'><Link to= '/'><FaBlog/>&nbsp; Blog</Link></li>
                <li className='list-inline-item'><Link to= '/'><RiContactsLine />&nbsp; Contact Us</Link></li>
                <li className='list-inline-item'><Link to= '/'><RiContactsLine />&nbsp; Contact Us</Link></li>
                
                
            </ul>
        </div>
      </div>

    </div>

  </nav>
  )
}

export default Navigation ;
