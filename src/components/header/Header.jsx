import React from 'react';
import { useHandleMenu } from '../../context/ContextWrapper';
import Navbar from '../navbar/Navbar';
import { Head } from './Header.style';

const Header = () => {
    const { isOpen } = useHandleMenu();

    return (
        <Head menuOpen={isOpen}>
            <Navbar />
        </Head>
    );
};

export default Header;
