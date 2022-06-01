import React from 'react';
import { Link } from 'react-router-dom';
import HamburgerMenu from '../animateHamburgerMenu/HamburgerMenu';
import { useHandleMenu } from '../../context/ContextWrapper';
import MenuItemContainer from './MenuItemContainer';
import { Logo, Nav } from './Navbar.style';

const Navbar = ({ isScroll }) => {
    const { isOpen, handleMenuOpen } = useHandleMenu();

    return (
        <Nav menuOpen={isOpen}>
            <Link to={'/'} onClick={isOpen ? handleMenuOpen : null}>
                <Logo
                    src='https://venuslab.co/icons/logo.svg'
                    menuOpen={isOpen}
                    isScroll={isScroll}
                />
            </Link>
            <HamburgerMenu />
            <MenuItemContainer />
        </Nav>
    );
};

export default Navbar;
