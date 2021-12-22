import React, { Component } from "react";
import { Link } from "react-router-dom";

import Logo from "../Assets/images/logo.svg";

class Navigator extends Component {
  render() {
    return (
      <>
        <nav className="container flex justify-around py-8 mx-auto ">
          <div className="flex items-center">
            <img className="img-responsive" src={Logo} />
          </div>
          <div className="items-center hidden space-x-8 lg:flex">
            <>
              <Link to="/" className="text-white">
                HOME
              </Link>
              <Link to="/shop" className="text-white">
                SHOP
              </Link>
              <Link to="/projects" className="text-white">
                PROJECT
              </Link>
              <Link to="/about" className="text-white">
                ABOUT US
              </Link>
              <Link to="/contact" className="text-white">
                CONTACT
              </Link>
            </>
          </div>
          <div className="flex items-center space-x-2">
            <button
              className="px-4 py-2 "
              style={{
                width: "178px",
                height: "45px",
                background:
                  "linear-gradient(90deg, #FF3E6E 0%, #FF9B5D 48.96%, #2ED4E2 100%)",
                borderRadius: "15px",
              }}
            >
              Contact Us
            </button>
          </div>
        </nav>
      </>
    );
  }
}

export default Navigator;
