import { Link } from "react-router-dom";
import Logo from '../../assets/images/logo.png';
import { IoSearchSharp } from "react-icons/io5";
import CountryDropdown from "./CountryDropdown";
import { FaUserAlt } from "react-icons/fa";

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

<button>
  <FaUserAlt />
</button>

              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  )
}

export default Header;