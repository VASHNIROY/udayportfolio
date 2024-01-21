import { GiHamburgerMenu } from "react-icons/gi";
import "./index.css";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [dropdown, setdropdown] = useState(false);

  const showdropdown = () => {
    setdropdown((prevState) => !prevState);
  };

  const dropdownClass = dropdown
    ? "header-dropdown-container"
    : "header-dropdown-closed-container";

  return (
    <div className="header-dropdown-main-container">
      <div className="header-main-container">
        <ul className="header-un-ordered-container">
          <li className="header-li-web-ele">
            <a href="#home" style={{ color: "white", textDecoration: "none" }}>
              Home
            </a>
          </li>
          <li className="header-li-web-ele">
            <a
              href="#mywoks"
              style={{ color: "white", textDecoration: "none" }}
            >
              My Work
            </a>
          </li>
          <li className="header-li-web-ele">
            <a href="#about" style={{ color: "white", textDecoration: "none" }}>
              About
            </a>
          </li>
          <li className="header-li-web-ele">
            <a
              href="#contact"
              style={{ color: "white", textDecoration: "none" }}
            >
              Contact
            </a>
          </li>
        </ul>
        <span className="header-hamburger-icon">
          {dropdown ? (
            <IoMdClose onClick={showdropdown} />
          ) : (
            <GiHamburgerMenu onClick={showdropdown} />
          )}
        </span>
      </div>
      <div className={dropdownClass}>
        <ul className="header-dropdown-un-ordered-container">
          <li className="header-dropdown-un-ordered-list-ele">
            {" "}
            <a href="#home" style={{ color: "white", textDecoration: "none" }}>
              Home
            </a>
          </li>
          <li className="header-dropdown-un-ordered-list-ele">
            {" "}
            <a
              href="#mywoks"
              style={{ color: "white", textDecoration: "none" }}
            >
              My Work
            </a>
          </li>
          <li className="header-dropdown-un-ordered-list-ele">
            {" "}
            <a href="#about" style={{ color: "white", textDecoration: "none" }}>
              About
            </a>
          </li>
          <li className="header-dropdown-un-ordered-list-ele">
            {" "}
            <a
              href="#contact"
              style={{ color: "white", textDecoration: "none" }}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
