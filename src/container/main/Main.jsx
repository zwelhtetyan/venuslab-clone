import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainContainer } from './Main.style';
import { Home, About, Services, Portfolios, Blog, Contact } from '../../pages';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

const Main = () => {
    return (
        <>
            <Header />
            <MainContainer>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/services' element={<Services />} />
                    <Route path='/portfolios' element={<Portfolios />} />
                    <Route path='/blog' element={<Blog />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </MainContainer>
            <Footer />
        </>
    );
};

export default Main;
