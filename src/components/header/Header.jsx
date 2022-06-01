import React, { useEffect, useState } from 'react';
import { useHandleMenu } from '../../context/ContextWrapper';
import Navbar from '../navbar/Navbar';
import { Head } from './Header.style';

const Header = () => {
    const { isOpen } = useHandleMenu();
    const [isScroll, setIsScroll] = useState(false);

    useEffect(() => {
        window.onscroll = () => {
            window.scrollY > 0 ? setIsScroll(true) : setIsScroll(false);
        };
    }, []);

    return (
        <Head menuOpen={isOpen} isScroll={isScroll}>
            <Navbar isScroll={isScroll} />
        </Head>
    );
};

export default Header;
