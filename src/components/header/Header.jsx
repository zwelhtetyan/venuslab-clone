import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useHandleMenu } from '../../context/ContextWrapper';
import Navbar from '../navbar/Navbar';
import { Head } from './Header.style';

const Header = () => {
    const { isOpen } = useHandleMenu();
    const [isScroll, setIsScroll] = useState(false);

    const location = useLocation();

    const isHome = () => {
        return location.pathname === '/';
    };

    useEffect(() => {
        window.onscroll = () => {
            window.scrollY > 0 ? setIsScroll(true) : setIsScroll(false);
        };
    }, []);

    return (
        <Head menuOpen={isOpen} isScroll={isScroll} isHome={isHome()}>
            <Navbar isScroll={isScroll} />
        </Head>
    );
};

export default Header;
