import { useState, useEffect } from "react";
import Logo from "../images/logo.png";
import Socials from "./Socials";

function Navbar() {
  const [colorChange, setColorchange] = useState(false);


  useEffect(() => {
    const handleScroll = event => {
      if (window.scrollY > 300) {
        setColorchange(true);
      } else {
        setColorchange(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    

  return (
    <nav
      className={
        !colorChange
          ? "navbar navbar-expand-lg fixed-top bg-transparent" 
          : "navbar navbar-expand-lg fixed-top bg-dark"
      }
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#Hero">
           <img className="logo" src={Logo} alt="logo" /> 
        </a>
        <button
          className="navbar-toggler me-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item p-2">
              <a className="nav-link text-white textfont1" href="#About">
                About Me
              </a>
            </li>
           {/*  <li className="nav-item p-2">
              <a className="nav-link text-white" href="#Portfolio">
                Portfolio
              </a>
            </li> */}
            <li className="nav-item p-2">
              <a className="nav-link text-white textfont1" href="#Contact">
                Contact
              </a>
            </li>
          </ul>
       
          {/* <div className="nav-item dropdown text-white  p-2 ">
            <a
              className="nav-link dropdown-toggle text-white"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Language
            </a>
            <ul className="dropdown-menu dropdown-menu-dark bg-black opacity-75 rounded">
              <li>
                <a className="dropdown-item text-white" href="#">
                  Español
                </a>
              </li>
              <li>
                <a className="dropdown-item text-white" href="#">
                  English
                </a>
              </li>
            
            </ul>
       
          </div> */}
          <Socials />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
