import React, { useEffect, useRef, useState } from "react";
import Nav from './nav';
import IntroPage from "./intro";
import ServicePage from "./service";
import GalleryPage from "./gallery";
import ContactPage from "./contact";
import AboutPage from "./about";
import * as img from "../styles/image-index";
import photo from "../../static/phone-call.png";
import lax from "lax.js";
// import SEO from "./seo";
import "../styles/index.scss";

export default function Home() {
  const homeRef = useRef(null);
  const residentialRef = useRef(null);
  const businessRef = useRef(null);
  const contactRef = useRef(null);
  const aboutRef = useRef(null);
  const dropDownButtonRef = useRef(null);
  const dropDownMenuRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [dropDownMenuRef]);

  const handleClickOutside = (event) => {
    if (
      dropDownMenuRef.current.style.display === "block" &&
      !dropDownMenuRef.current.contains(event.target) &&
      !dropDownButtonRef.current.contains(event.target)
    ) {
      console.log("Block launched");
      setDropdownOpen(false);
      dropDownMenuRef.current.style.display = "none";
    }
  };

  const handleMenuStateChange = (state) => setMenuOpen(state);
  const closeMenu = () => setMenuOpen(false);
  // useEffect(() => {
  //   lax.setup()
  //   const updateLax = () => {
  //     lax.update(window.scrollY)
  //     window.requestAnimationFrame(updateLax)
  //   }
  //   window.requestAnimationFrame(updateLax)
  // }, []);

  const scrollTo = (reference, fromStartFlag, isMobile) => {
    let blockPos = "center";
    if (isMobile) closeMenu();
    if (fromStartFlag) blockPos = "start";
    reference.current.scrollIntoView({ behavior: "smooth", block: blockPos });
  };

  const toggleDropdown = () => {
    if (!dropdownOpen) {
      dropDownMenuRef.current.style.display = "block";
    } else {
      console.log("dropdown block");
      dropDownMenuRef.current.style.display = "none";
    }
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <main>
      {/* <SEO /> */}
      <div id="app-container">
        <Nav
          scrollTo={scrollTo}
          toggleDropdown={toggleDropdown}
          handleMenuStateChange={handleMenuStateChange}
          homeRef={homeRef}
          residentialRef={residentialRef}
          businessRef={businessRef}
          contactRef={contactRef}
          aboutRef={aboutRef}
          dropDownButtonRef={dropDownButtonRef}
          dropDownMenuRef={dropDownMenuRef}
          menuOpen={menuOpen}
        />

        <IntroPage reference={homeRef} />
        <ServicePage
          reference={residentialRef}
          quoteReference={aboutRef}
          client="Residential"
          orientation="image-left"
          dataArray={img.heroResidentialImages}
          scrollTo={scrollTo}
        />
        <GalleryPage dataArray={img.galleryResidentalImages} />
        <ServicePage
          reference={businessRef}
          quoteReference={aboutRef}
          client="Business"
          orientation="image-right"
          dataArray={img.heroResidentialImages}
          scrollTo={scrollTo}
        />
        <AboutPage reference={aboutRef} />
        <ContactPage reference={contactRef} />
        <div className="main-container" id="footer-container">
          <footer>
            <p>Essential Works, LLC &copy;</p>
          </footer>
        </div>
      </div>
    </main>
  );
}
