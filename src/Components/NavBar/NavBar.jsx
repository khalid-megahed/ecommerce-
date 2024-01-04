/* eslint-disable react/prop-types */

import { useState, useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Dropdown from "react-bootstrap/Dropdown";
import "./NavBar.css";
import { ShopContext } from "../../Context/ShopContext";

import { Link } from "react-router-dom";
import {
  faRightToBracket,
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MyNavbar = (props) => {
  const { getTotalCartItems } = useContext(ShopContext);

  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [showDropdown3, setShowDropdown3] = useState(false);

  const handleDropdown1 = (status) => {
    setShowDropdown1(status);
  };

  const handleDropdown2 = (status) => {
    setShowDropdown2(status);
  };
  const handleDropdown3 = (status) => {
    setShowDropdown3(status);
  };


  return (
    <Navbar bg="light" expand="lg" className="navbar px-5">
      <Navbar.Brand href="/">
        <img className="logo" src={props.logo} alt="" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav " className=" justify-content-end ">
        <Nav>
          <Nav.Link href="/" className="px-3">
            Home
          </Nav.Link>

          <Dropdown
            as={Nav.Item}
            show={showDropdown1}
            onMouseEnter={() => handleDropdown1(true)}
            onMouseLeave={() => handleDropdown1(false)}
          >
            <Dropdown.Toggle as={Nav.Link} id="dropdown-link">
              <Link to="/women">Womens</Link>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/women_jacket">jacket</Dropdown.Item>
              <Dropdown.Item href="/women_dress">dress</Dropdown.Item>
              <Dropdown.Item href="/women_pocket">pocket</Dropdown.Item>
              <Dropdown.Item href="/women_veil">veil</Dropdown.Item>
              
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown
            as={Nav.Item}
            show={showDropdown2}
            onMouseEnter={() => handleDropdown2(true)}
            onMouseLeave={() => handleDropdown2(false)}
          >
            <Dropdown.Toggle as={Nav.Link} id="dropdown-link">
              <Link to="/kids">Child</Link>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/kid_jacket">jaket</Dropdown.Item>
            
              <Dropdown.Item href="/kid_Hoodie"> hoodie</Dropdown.Item>
              <Dropdown.Item href="/kid_dress"> dress</Dropdown.Item>
              <Dropdown.Item href="/kid_Sweet_Sheet"> sweet sheert</Dropdown.Item>
              <Dropdown.Item href="/kid_short"> short</Dropdown.Item>
              <Dropdown.Item href="/kid_pullover"> pullover</Dropdown.Item>
              <Dropdown.Item href="/kid_jeans"> jeans</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown
            as={Nav.Item}
            show={showDropdown3}
            onMouseEnter={() => handleDropdown3(true)}
            onMouseLeave={() => handleDropdown3(false)}
          >
            <Dropdown.Toggle as={Nav.Link} id="dropdown-link">
              <Link to="/mens">Mens</Link>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/men_jacket">jacket</Dropdown.Item>
              <Dropdown.Item href="/men_jeans">jeans</Dropdown.Item>
              <Dropdown.Item href="/men_bady">bady</Dropdown.Item>
              <Dropdown.Item href="/men_hoodies">hoodies</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
        <div className="group-icon">
        <Link className="icon" to="/search">
          {" "}
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </Link>
        <Link className="icon" to="/login">
          <FontAwesomeIcon icon={faRightToBracket} />
        </Link>
        <Link className="icon" to="/cart">
          <FontAwesomeIcon icon={faCartShopping} />
          <div className="nav-cart-count">{getTotalCartItems()}</div>

        </Link>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
