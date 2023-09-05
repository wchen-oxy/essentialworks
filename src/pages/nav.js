import React from "react";
import { icons } from "../styles/image-index";
import { slide as Menu } from "react-burger-menu";
import { withPrefix } from "gatsby";

const phone = icons.phone;

const Nav = (props) => {
  return (
    <header>
      <nav id="web-navigation-bar">
        <button onClick={() => props.scrollTo(props.homeRef, true)}>
          <div className="logo-container">
            <h4 className="logo-text" id="thin-logo">
              Essential
            </h4>
            <h4 className="logo-text" id="bold-logo">
              Works
            </h4>
          </div>
        </button>
        <div className="dropdown">
          <button
            onClick={props.toggleDropdown}
            className="dropbtn"
            ref={props.dropDownButtonRef}
          >
            Services
          </button>
          <div
            id="myDropdown"
            className="dropdown-content"
            ref={props.dropDownMenuRef}
          >
            <button onClick={() => props.scrollTo(props.residentialRef, true)}>
              Residential Services
            </button>
            <button onClick={() => props.scrollTo(props.businessRef, true)}>
              Business Services
            </button>
          </div>
        </div>
        <button onClick={() => props.scrollTo(props.aboutRef, false)}>
          About Us
        </button>
        <a
          id="quote-url-link"
          href="https://forms.gle/idoyRoFJoFWhJACy7"
          target="_blank"
        >
          <p>Get a Quote</p>
        </a>
        <button onClick={() => props.scrollTo(props.contactRef, false)}>
          Contact Us
        </button>
        <a id="phone-link" href="tel:347-494-1802">
          <img id="phone-image" src={withPrefix(phone)} />
          (347) 494-1802
        </a>
      </nav>
      <div id="mobile-navigation-bar">
        <Menu
          isOpen={props.menuOpen}
          onStateChange={(state) => props.handleMenuStateChange(state.isOpen)}
        >
          <a
            id="home"
            className="menu-item"
            onClick={() => props.scrollTo(props.homeRef, true, true)}
          >
            Home
          </a>
          <a
            id="residential"
            className="menu-item"
            onClick={() => props.scrollTo(props.residentialRef, false, true)}
          >
            Residential
          </a>
          <a
            id="business"
            className="menu-item"
            onClick={() => props.scrollTo(props.businessRef, false, true)}
          >
            Business
          </a>
          <a
            id="about"
            className="menu-item"
            onClick={() => props.scrollTo(props.aboutRef, false, true)}
          >
            About
          </a>
          <a
            id="form-link"
            className="menu-item"
            href="https://forms.gle/idoyRoFJoFWhJACy7"
            target="_blank"
          >
            Get a Quote
          </a>
          <a
            id="contact"
            className="menu-item"
            onClick={() => {
              console.log("contact hit");
              return props.scrollTo(props.contactRef, false, true);
            }}
          >
            Contact
          </a>
        </Menu>
        <div className="phone-item-container">
          <a id="phone-link" href="tel:347-494-1802">
            <img id="phone-image" src={withPrefix(phone)} />
            (347) 494-1802
          </a>
        </div>
      </div>
    </header>
  );
};

export default Nav;
