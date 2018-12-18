import React from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';


import './Navbar.scss';

import aboutImage from '../static/media/my-logo.png';


const navbar = () => {
    return (
        <div className="navbar navbar-fixed-top">
            <div className="container">
                <div className="navbar-header">
                    <a href="/" className="navbar-brand">
                        <img src={aboutImage} alt=""/>
                    </a>
                    {/*<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>*/}
                </div>
                <ul className="nav navbar-nav navbar-right">
                    <li><a href="#about" data-toggle="collapse" data-target=".navbar-collapse.in">About</a></li>
                    <li><a href="#work" data-toggle="collapse" data-target=".navbar-collapse.in">Portfolio</a></li>
                    <li><a href="#contact" data-toggle="collapse" data-target=".navbar-collapse.in">Contact</a></li>
                </ul>
                
                
            </div>
        </div>
    );
    
};

export default navbar;