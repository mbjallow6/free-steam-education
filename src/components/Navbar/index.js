import React, { useState, useEffect } from "react";
import Dropdown from '../Dropdown'
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import { FaBars,} from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavItem,
  NavMenu,
  NavLinks,
  NavBtn,
  NavBtnLink,
  DropdownIcon
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const [dropdown , setDropdown] = useState(false);

  const changeScrollNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeScrollNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              allsteam
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="about"
                  smoth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Home
                </NavLinks>
              </NavItem>

              <NavItem 
              onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
                <NavLinks
                  to="Courses"
                  smoth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Courses 
                  <DropdownIcon>
                  <MdKeyboardArrowDown/>
                  </DropdownIcon>
                  
                </NavLinks>
                {dropdown && <Dropdown/>}
              </NavItem>

              <NavItem>
                <NavLinks
                  to="signup"
                  smoth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Sign Up
                </NavLinks>
              </NavItem>

              <NavBtn>
                <NavBtnLink
                  to="/signin"
                  smoth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Sing In
                </NavBtnLink>
              </NavBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
