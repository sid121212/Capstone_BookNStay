import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/Navbar.scss";

const Navbar = () => {
  const [header, setHeader] = useState("");
  const listenScrollEvent = (event) => {
    if (window.scrollY < 73) {
      return setHeader("");
    } else if (window.scrollY > 70) {
      return setHeader("alt-color");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);
  return (
    <div className={`Navbar ${header}`}>
      <div className="navTop">
        <div className="contact">
          <i className="fas fa-phone-alt"></i>
          <i className="fas fa-envelope"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-facebook-square"></i>
        </div>
        <div>
          <Link to="/">
            <h1 style={{fontSize:"2rem", fontWeight:"bold"}} className="alt-font">BOOKNSTAY</h1>
          </Link>
        </div>
        <Link to="/booking">
          <button className="btn">Booking</button>
        </Link>
      </div>
      <div className="navBottom">
        <Link to="/rooms">
          Rooms <span>&#183;</span>
        </Link>
        {/* <Link to="/dining">
          Dining <span>&#183;</span>{" "}
        </Link> */}
        <Link to="/tours">
          Tours
        </Link>
        {/* <Link to="/about">About</Link> */}
      </div>
    </div>
  );
};

export default Navbar;
