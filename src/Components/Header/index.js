import { Link } from "react-router-dom";
import Logo from '../../assets/images/logo.png';
import { IoSearchSharp } from "react-icons/io5";
import CountryDropdown from "./CountryDropdown";
import { FaRegUser } from "react-icons/fa";
import { BsCart } from "react-icons/bs";


const Header = () => {

  return (
    <>
      <div className="headerWrapper">
        <div className="top-strip bg-blue"  >
          <div className="container">
            <p className="mb-0 mt-0 text-center">Your Local E-Commerce Hub for Wardha and Sawangi</p>
          </div>

        </div>

        <header className="header">
          <div className="container">
            <div className="row">
              <div className="logoWrapper col-sm-2 d-flex align-items-center">
                <Link to={'/'}><img src={Logo} alt='logo' /></Link>
              </div>
              <div className="col-sm-10 d-flex align-items-center part2">
                <CountryDropdown />

                {/* Heder Serach Starts Here */}

                <div className="headerSearch ml-3 mr-3">
                  <input type="text" placeholder="Search for Products" />
                  <button><IoSearchSharp /> </button>
                </div>
                {/* Heder Serach EndHere */}
                <div className="part3 d-flex align-items-center ml-auto">

                  <button className="circle mr-3">
                    <FaRegUser />
                  </button>
                  <div className="ml-auto cartTab d-flex align-items-center">
                    <span className="price">$ 1000</span>
                    <div className="position-relative ml-2">
                      <button className="circle"><BsCart /></button>
                      <span className="count d-flex align-items-center justify-content-center">0</span>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  )
}

export default Header;